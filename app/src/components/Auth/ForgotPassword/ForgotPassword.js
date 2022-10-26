import style from "./ForgotPassword.module.css"

const ForgotPassword = () => {
    return (
        <div className={style.forgot_block}>
            <span></span>
            <a href="" className={style.forgot_link}>забыли ваш пароль?</a>
        </div>
    )
}

export default ForgotPassword;