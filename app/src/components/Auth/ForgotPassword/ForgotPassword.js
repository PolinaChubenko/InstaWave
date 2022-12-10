import style from "./ForgotPassword.module.css"

const ForgotPassword = (props) => {
    return (
        <div className={style.forgot_block}>
            <p className={style.forgot_link} style={{color: props.color}}>{props.error}</p>
        </div>
    )
}

export default ForgotPassword;