import style from "./Profile.module.css";
import Subscribe from "../Subscribe";
import {ajaxService} from "../../../services/ajaxService";
import {useEffect, useState} from "react";

const InfoBlock = (props) => {
    const blogUserId = props.blog_user_id;
    const blogId = props.blog_id;
    const [subscriptionId, setSubscriptionId] = useState(null);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [myBlog, setMyBlog] = useState(false);

    const [totalFollowers, setTotalFollowers] = useState(props.total_followers);
    const [totalFollowings, setTotalFollowings] = useState(props.total_followings);


    function update_followers() {
        ajaxService(`/blogs/${blogId}/`).then((data) => {
            setTotalFollowers(data.total_followers);
            setTotalFollowings(data.total_followings);
        });
    }

    function update_subscription_states() {
        ajaxService(`/following/?who=${currentUserId}&whom=${blogUserId}`).then((data) => {
            if (Object.keys(data).length === 0) {
                setIsSubscribed(false);
                setSubscriptionId(null);
            } else {
                setIsSubscribed(true);
                setSubscriptionId(data[0].id);
            }
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isSubscribed) {
            ajaxService(`/following/${subscriptionId}/`, {
                method: 'DELETE',
            }).then(() => {
                update_followers();
                update_subscription_states();
            });
        } else {
            ajaxService('/following/', {
                method: 'POST',
                body: JSON.stringify({ following_user: blogUserId }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                update_followers();
                update_subscription_states();
            });
        }
    }

    useEffect(() => {
        ajaxService('/user/current').then((data) => {
            setCurrentUserId(data['id']);
        });
    })

    useEffect(() => {
        if (currentUserId !== null) {
            if (currentUserId === blogUserId) {
                setMyBlog(true);
            }
            update_subscription_states();
        }
    }, [currentUserId])

    return (
        <div className={style.profile_wrapper}>
            <div className={style.avatar_img}>
                <img alt='avatar' src={props.avatar}/>
            </div>
            <div className={style.info_wrapper}>
                <div className={style.username_block}>
                    <p className={style.username}>{props.username}</p>
                    <div className={style.subscribe}>
                        {!myBlog ?
                            <button onClick={handleSubmit}>
                                <Subscribe is_subscribed={isSubscribed}/>
                            </button> :
                            <p></p>}

                    </div>
                </div>
                <div className={style.quote_block}>
                    <p>{props.quote}</p>
                </div>
                <div className={style.publications_block}>
                    <p>Публикаций: <span>{props.total_posts}</span></p>
                    <p>Подписчиков: <span>{totalFollowers}</span></p>
                    <p>Подписок: <span>{totalFollowings}</span></p>
                </div>
            </div>
        </div>
    )
}

export default InfoBlock;