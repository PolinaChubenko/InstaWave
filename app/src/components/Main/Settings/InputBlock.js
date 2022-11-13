import style from "./Settings.module.css";

const InputBlock = (props) => {
    return (
        <div className={style.input_block}>
            <label>{props.text}</label>
            <input id={props.id} type={props.type} maxLength={props.maxLength} required></input>
        </div>
    )
}

export default InputBlock;