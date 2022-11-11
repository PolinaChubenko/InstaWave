import like from "../../../images/heart.png";
import unlike from "../../../images/heart_unliked.png";

const Like = (props) => {
    if (props.is_liked) {
        return <img alt='like' src={like}/>;
    }
    return <img alt='like' src={unlike}/>;
}

export default Like;