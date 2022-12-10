import cx from 'classnames';
import InputBlock from "../InputBlock/InputBlock";
import style from "./Forms.module.css";
import {useState} from "react";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import {ajaxAuthService, ajaxService} from "../../../services/ajaxService";

const SignUpForm = () => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!login || !email || !password || !passwordConfirm) {
            setError('заполните все поля');
            return;
        }
        if (password !== passwordConfirm) {
            setError('пароли не совпали');
            return;
        }
        ajaxAuthService('/user/', {
            method: 'POST',
            body: JSON.stringify({ username: login, password: password, email: email }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            ajaxAuthService('/token/', {
                method: 'POST',
                body: JSON.stringify({ username: login, password: password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((data) => {
                window.localStorage.setItem("ACCESS", data.access);
                ajaxService(`/blogs/`, {
                    method: 'POST',
                    body: JSON.stringify({ username: data.username }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(() => {
                    window.location.reload();
                }
                );
            });
        }).catch(() => {
            setError("что-то пошло не так");
        });
    };

    const handleChangeLogin = (event) => {
        setError('')
        setLogin(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setError('');
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setError('');
        setPassword(event.target.value);
    }

    const handleChangePasswordConfirm = (event) => {
        setError('');
        setPasswordConfirm(event.target.value);
    }

    return (
        <form className={cx(style.form, style.form_signup)}>
            <fieldset>
                <InputBlock text={"имя пользователя"} id={"signup_username"} type={"username"}
                            value={login} onChange={handleChangeLogin}/>
                <InputBlock text={"почта"} id={"signup_email"} type={"email"}
                            value={email} onChange={handleChangeEmail}/>
                <InputBlock text={"пароль"} id={"signup_password"} type={"password"}
                            value={password} onChange={handleChangePassword}/>
                <InputBlock text={"подтверждение пароля"} id={"signup_password_confirm"} type={"password"}
                            value={passwordConfirm} onChange={handleChangePasswordConfirm}/>
            </fieldset>
            <ForgotPassword error={error} color={'red'}/>
            <button type="submit" className={style.btn_signup} onClick={handleSubmit}>продолжить</button>
        </form>
    )
}

export default SignUpForm;