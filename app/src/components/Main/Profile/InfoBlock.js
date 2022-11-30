import style from "./Profile.module.css";
import Subscribe from "../Subscribe";

const InfoBlock = (props) => {
    return (
        <div className={style.profile_wrapper}>
            <div className={style.avatar_img}>
                <img alt='avatar' src={props.avatar}/>
            </div>
            <div className={style.info_wrapper}>
                <div className={style.username_block}>
                    <p className={style.username}>{props.username}</p>
                    <div className={style.subscribe}>
                        <Subscribe is_subscribed={false}/>
                    </div>
                </div>
                <div className={style.quote_block}>
                    <p>{props.quote}</p>
                </div>
                <div className={style.publications_block}>
                    <p>Публикаций: <span>{props.total_posts}</span></p>
                    <p>Подписчиков: <span>{props.total_followers}</span></p>
                    <p>Подписок: <span>{props.total_followings}</span></p>
                </div>
            </div>
        </div>
    )
}

export default InfoBlock;