import style from "./Profile.module.css";
import Like from "./Like";

const Post = (props) => {
    return (
        <div className={style.posts_column}>
            <img className={style.post_img}
                 src={props.post_src}
                 alt={props.post_alt}
            />
            <div className={style.post_description}>
                <p>{props.date}</p>
                <div className={style.post_description_like}>
                    <Like is_liked={props.is_liked} />
                    <div className={style.bottom_right}>{props.likes_amount}</div>
                </div>

            </div>
        </div>
    )
}

export default Post;