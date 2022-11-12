import style from "./Profile.module.css";

const PostImage = (props) => {
    return (
        <img className={style.post_img}
             src={props.post_src}
             alt='post'
        />
    )
}

export default PostImage;