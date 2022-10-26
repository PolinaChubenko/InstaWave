const InputBlock = (props) => {
    return (
        <div className="input_block">
            <label>{props.text}</label>
            <input id={props.id} type={props.type} required></input>
        </div>
    )
}

export default InputBlock;