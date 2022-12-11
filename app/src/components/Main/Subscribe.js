import style from "./Main.module.css";

const Subscribe = (props) => {
    if (props.is_me) {
        return <p className={style.is_me}>О, это же я</p>;
    }
    if (props.is_subscribed) {
        return <p className={style.is_subscribed}>Вы подписаны</p>;
    }
    return <p className={style.is_not_subscribed}>Подписаться</p>;
}

export default Subscribe;