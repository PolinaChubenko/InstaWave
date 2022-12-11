import style from "./Profile.module.css";
import Like from "./Like";
import {useEffect, useState} from "react";
import {isLogin} from "../../../utils/isLogin";
import {ajaxService} from "../../../services/ajaxService";

const PostDescription = (props) => {
    const postId = props.post_id;
    const [like, set_like] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        console.log('it is', postId);
        if (!like) {
            console.log('we are in');
            // ajaxService(`/post/?id=${postId}`).then((data) => {
            //     console.log(data);
            //     ajaxService(`/like/`, {
            //         method: 'POST',
            //         body: JSON.stringify({ content_object: data }),
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }
            //     }).then();
            // });
            // ajaxService(`/like/`, {
            //     method: 'POST',
            //     body: JSON.stringify({ object_id: postId }),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // }).then();
        }
        like ? set_like(false) : set_like(true);
    }

    return (
        <div className={style.post_description}>
            <p>{props.date_creation}</p>
            <div className={style.post_description_like}>
                <a href="#" onClick={handleClick}><Like is_liked={like} /></a>
                <div className={style.bottom_right}>{props.total_likes}</div>
            </div>
        </div>
    )
}

export default PostDescription;