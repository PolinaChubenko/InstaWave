import style from "./Search.module.css";
import {ReactComponent as Arrow} from "./../../../images/found-arrow.svg";

const Found = () => {
    return (
        <div className={style.result}>
            <Arrow className={style.result_arrow}/>
        </div>

    )
}

export default Found;