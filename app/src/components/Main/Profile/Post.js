import style from "./Profile.module.css";
import PostImage from "./PostImage";
import PostDescription from "./PostDescription";

const Post = (props) => {
    return (
        <div className={style.posts_column}>
            <PostImage post_src={props.image}/>
            <PostDescription date_creation={props.date_creation}
                             is_liked={props.is_liked}
                             total_likes={props.total_likes}
                             blog_id={props.blog_id}
                             cur_user={props.cur_user}/>
        </div>
    )
}

export default Post;