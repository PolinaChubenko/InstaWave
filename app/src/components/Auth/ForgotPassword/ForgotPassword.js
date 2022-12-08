import style from "./ForgotPassword.module.css"

const ForgotPassword = (props) => {
    return (
        <div className={style.forgot_block}>
            <p className={style.forgot_link}>{props.error}</p>
        </div>
    )
}

export default ForgotPassword;