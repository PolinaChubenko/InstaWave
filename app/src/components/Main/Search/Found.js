import style from "./Search.module.css";
import {ReactComponent as Arrow} from "./../../../images/found-arrow.svg";
import avatar from "../../../images/main-background.jpg";
import Subscribe from "../Subscribe";

const Found = () => {
    return (
        <div className={style.result}>
            <Arrow className={style.result_arrow}/>
            <div className={style.avatar_img}>
                <img alt='avatar' src={avatar}/>
            </div>
            <div>
                <p className={style.username}>lina._.po</p>
                <div>
                    <Subscribe is_subscribed={true}/>
                </div>
            </div>

        </div>

    )
}

export default Found;