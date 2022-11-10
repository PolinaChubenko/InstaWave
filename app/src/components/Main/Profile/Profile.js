import Main from "../Main";
import avatar from "./../../../images/main-background.jpg";
import style from "./Profile.module.css";

const Profile = () => {
    return (
        <Main>
            <div className={style.profile_wrapper}>
                <div className={style.avatar_img}>
                    <img alt='avatar' src={avatar}/>
                </div>
                <div className={style.info_wrapper}>
                    <div className={style.username_block}>
                        <p className={style.username}>lina._.po</p>
                        <p className={style.subscribe}>Подписаться</p>
                    </div >
                    <div className={style.quote_block}>
                        <p>какая-то очень умная цитата о том как крут vaprowave
                            ну очень умная цитата о том как крут vaprowave</p>
                    </div>
                    <div className={style.publications_block}>
                        <p>Публикаций: <span>10</span></p>
                        <p>Подписчиков: <span>10</span></p>
                        <p>Подписок: <span>10</span></p>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Profile;