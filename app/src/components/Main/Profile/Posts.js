import style from "./Profile.module.css";
import Post from "./Post";

const Posts = () => {
    return (
        <div className={style.posts_wrapper}>
            <div></div>
            <div className={style.posts_table}>
                <div className={style.posts_rows}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Posts;