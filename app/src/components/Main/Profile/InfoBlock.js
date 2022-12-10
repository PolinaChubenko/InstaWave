import style from "./Profile.module.css";
import Subscribe from "../Subscribe";
import {ajaxService} from "../../../services/ajaxService";
import {useEffect, useState} from "react";

const InfoBlock = (props) => {
    const blogUserId = props.blog_user_id;
    const currentUserId = props.current_user_id;
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [myBlog, setMyBlog] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        ajaxService('/following/', {
            method: 'POST',
            body: JSON.stringify({ following_user: blogUserId }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            ajaxService(`/following/?id=${currentUserId}`).then((data) => {
                const subscriptions = [];
                data.forEach((subscription) => {
                    subscriptions.push(subscription.following_user.id);
                });
                if (subscriptions.indexOf(blogUserId) > -1) {
                    setIsSubscribed(true);
                } else {
                    setIsSubscribed(false);
                }
            })
        });
    }

    useEffect(() => {
        if (currentUserId === blogUserId) {
            setMyBlog(true);
        }
        ajaxService(`/following/?id=${currentUserId}`).then((data) => {
            const subscriptions = [];
            data.forEach((subscription) => {
                subscriptions.push(subscription.following_user.id);
            });
            if (subscriptions.indexOf(blogUserId) > -1) {
                setIsSubscribed(true);
            } else {
                setIsSubscribed(false);
            }
        })
    })

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
                    <p>Подписчиков: <span>{props.total_followers}</span></p>
                    <p>Подписок: <span>{props.total_followings}</span></p>
                </div>
            </div>
        </div>
    )
}

export default InfoBlock;