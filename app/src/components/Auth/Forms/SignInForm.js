import cx from 'classnames';
import InputBlock from "../InputBlock/InputBlock";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import style from "./Forms.module.css";
import {Link} from "react-router-dom";

const SignInForm = () => {
    return (
        <form className={cx(style.form, style.form_login)}>
            <fieldset>
                <p className="lets_go">Vaporwave, как и другие эстетики, вызывает ностальгию. Но даже
                    если вас не было в 90-ые, фотокарточки отправят вас в эпоху, которая
                    когда-то была...</p>
                <InputBlock text={"имя пользователя / почта"} id={"login_email"} type={"email"}/>
                <InputBlock text={"пароль"} id={"login_password"} type={"password"}/>
                <ForgotPassword/>
            </fieldset>
            <Link to='/profile' style={{textDecoration: 'none'}}>
                <button type="submit" className={style.btn_login}>войти</button>
            </Link>
        </form>
    )
}

export default SignInForm;