import style from "./Profile.module.css";
import PostImage from "./PostImage";
import PostDescription from "./PostDescription";

const Post = (props) => {
    return (
        <div className={style.posts_column} key={props.key}>
            <PostImage post_src={props.img_src}/>
            <PostDescription date_creation={props.date_creation} is_liked={props.is_liked} total_likes={props.total_likes}/>
        </div>
    )
}

export default Post;