import style from "./Profile.module.css";
import demo1 from "../../../images/demo/demo1.jpg";
import like from "../../../images/heart.png";

const Post = () => {
    return (
        <div className={style.posts_column}>
            <img alt='demo1' src={demo1} className={style.post_img} />
            <div className={style.post_description}>
                <p>11.11.2022</p>
                <div className={style.post_description_like}>
                    <img alt='like' src={like}/>
                    <div className={style.bottom_right}>13</div>
                </div>

            </div>
        </div>
    )
}

export default Post;