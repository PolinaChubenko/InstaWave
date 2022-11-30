import style from "./Profile.module.css";
import Post from "./Post";

const Posts = (props) => {
    const posts = []

    props.post_set.forEach((post) => {
        const postElement = (
            <Post key={post.id} image={post.image} date_creation={post.date_creation}
                  total_likes={post.total_likes} is_liked={true}/>
        );
        posts.push(postElement);
    });

    return (
        <div className={style.posts_wrapper}>
            <div></div>
            <div className={style.posts_table}>
                <div className={style.posts_rows}>
                    {posts}
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Posts;