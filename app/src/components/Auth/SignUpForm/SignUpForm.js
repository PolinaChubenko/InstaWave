import InputBlock from "../InputBlock/InputBlock";

const SignUpForm = () => {
    return (
        <form className="form form_signup">
            <fieldset>
                <InputBlock text={"имя пользователя"} id={"signup_username"} type={"username"}/>
                <InputBlock text={"почта"} id={"signup_email"} type={"email"}/>
                <InputBlock text={"пароль"} id={"signup_password"} type={"password"}/>
                <InputBlock text={"подтверждение пароля"} id={"signup_password_confirm"} type={"password"}/>
            </fieldset>
            <button type="submit" className="btn_signup">продолжить</button>
        </form>
    )
}

export default SignUpForm;