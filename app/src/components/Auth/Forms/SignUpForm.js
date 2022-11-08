import cx from 'classnames';
import InputBlock from "../InputBlock/InputBlock";
import style from "./Forms.module.css";

const SignUpForm = () => {
    return (
        <form className={cx(style.form, style.form_signup)}>
            <fieldset>
                <InputBlock text={"имя пользователя"} id={"signup_username"} type={"username"}/>
                <InputBlock text={"почта"} id={"signup_email"} type={"email"}/>
                <InputBlock text={"пароль"} id={"signup_password"} type={"password"}/>
                <InputBlock text={"подтверждение пароля"} id={"signup_password_confirm"} type={"password"}/>
            </fieldset>
            <button type="submit" className={style.btn_signup}>продолжить</button>
        </form>
    )
}

export default SignUpForm;