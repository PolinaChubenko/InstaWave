import style from "./Profile.module.css";
import Like from "./Like";

const PostDescription = (props) => {
    return (
        <div className={style.post_description}>
            <p>{props.date}</p>
            <div className={style.post_description_like}>
                <Like is_liked={props.is_liked} />
                <div className={style.bottom_right}>{props.likes_amount}</div>
            </div>
        </div>
    )
}

export default PostDescription;