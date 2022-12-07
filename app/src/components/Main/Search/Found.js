import style from "./Search.module.css";
import {ReactComponent as Arrow} from "./../../../images/found-arrow.svg";
import Subscribe from "../Subscribe";
import {Link} from "react-router-dom";

const Found = (props) => {
    return (
        <Link to={`/profile/${props.id}`} className={style.link_to_found}>
            <div className={style.result} id={props.id}>
                <Arrow className={style.result_arrow}/>
                <div className={style.avatar_img}>
                    <img alt='avatar' src={props.avatar}/>
                </div>
                <div>
                    <p className={style.username}>{props.username}</p>
                    <div className={style.is_subscribed}>
                        <Subscribe is_subscribed={props.is_subscribed}/>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Found;