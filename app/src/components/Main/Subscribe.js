
const Subscribe = (props) => {
    if (props.is_subscribed) {
        return <p>Вы подписаны</p>;
    }
    return <p>Подписаться</p>;
}

export default Subscribe;