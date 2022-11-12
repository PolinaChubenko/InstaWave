import style from "./Profile.module.css";
import Post from "./Post";
import demo1 from "../../../images/demo/demo1.jpg";
import demo2 from "../../../images/demo/demo2.png";

const Posts = () => {
    return (
        <div className={style.posts_wrapper}>
            <div></div>
            <div className={style.posts_table}>
                <div className={style.posts_rows}>
                    <Post img_src={demo1} date={'10.10.2022'} likes_amount={'13'} is_liked={true}/>
                    <Post img_src={demo2} date={'09.10.2022'} likes_amount={'+99'} is_liked={false}/>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Posts;