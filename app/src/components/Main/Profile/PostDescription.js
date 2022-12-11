import style from "./Profile.module.css";
import Like from "./Like";
import {useEffect, useState} from "react";
import {ajaxService} from "../../../services/ajaxService";

const PostDescription = (props) => {
    const postId = props.post_id;
    const [totalLikes, setTotalLikes] = useState(props.total_likes);
    const [likingId, setLikingId] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const [currentUserId, setCurrentUserId] = useState(null);

    function update_likes() {
        ajaxService(`/post/?id=${postId}`).then((data) => {
            setTotalLikes(data[0].total_likes);
        });
    }

    function update_like_states() {
        ajaxService(`/like/?who=${currentUserId}&what=${postId}`).then((data) => {
            if (Object.keys(data).length === 0) {
                setIsLiked(false);
                setLikingId(null);
            } else {
                setIsLiked(true);
                setLikingId(data[0].id);
            }
        });
    }

    function handleClick(e) {
        e.preventDefault();
        if (!isLiked) {
            ajaxService(`/like/`, {
                method: 'POST',
                body: JSON.stringify({ post: postId }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                update_likes();
                update_like_states();
            });
        } else {
            ajaxService(`/like/${likingId}/`, {
                method: 'DELETE',
            }).then(() => {
                update_likes();
                update_like_states();
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
            update_like_states();
        }
    }, [currentUserId])

    return (
        <div className={style.post_description}>
            <p>{props.date_creation}</p>
            <div className={style.post_description_like}>
                <a href="#" onClick={handleClick}><Like is_liked={isLiked} /></a>
                <div className={style.bottom_right}>{totalLikes}</div>
            </div>
        </div>
    )
}

export default PostDescription;