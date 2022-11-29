import style from "./Profile.module.css";
import Like from "./Like";
import {useState} from "react";

const PostDescription = (props) => {
    const [like, set_like] = useState(false);

    function handleClick(e) {
        e.preventDefault();
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