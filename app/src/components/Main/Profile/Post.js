import style from "./Profile.module.css";
import PostImage from "./PostImage";
import PostDescription from "./PostDescription";

const Post = (props) => {
    return (
        <div className={style.posts_column}>
            <PostImage post_src={props.img_src}/>
            <PostDescription date={props.date} is_liked={props.is_liked} likes_amount={props.likes_amount}/>
        </div>
    )
}

export default Post;