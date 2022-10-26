import InputBlock from "../InputBlock/InputBlock";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

const SignInForm = () => {
    return (
        <form className="form form_login">
            <fieldset>
                <p className="lets_go">Vaporwave, как и другие эстетики, вызывает ностальгию. Но даже
                    если вас не было в 90-ые, фотокарточки отправят вас в эпоху, которая
                    когда-то была...</p>
                <InputBlock text={"имя пользователя / почта"} id={"login_email"} type={"email"}/>
                <InputBlock text={"пароль"} id={"login_password"} type={"password"}/>
                <ForgotPassword/>
            </fieldset>
            <button type="submit" className="btn_login">войти</button>
        </form>
    )
}

export default SignInForm;