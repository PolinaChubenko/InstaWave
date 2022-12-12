import cx from 'classnames';
import InputBlock from "../InputBlock/InputBlock";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import {ajaxAuthService, ajaxService} from '../../../services/ajaxService'
import style from "./Forms.module.css";
import {useNavigate} from "react-router-dom";
import {useState} from 'react'

const SignInForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!login) {
            setError('введите логин');
            return;
        }
        if (!password) {
            setError('введите пароль');
            return;
        }
        ajaxAuthService('/token/', {
            method: 'POST',
            body: JSON.stringify({ username: login, password: password }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((data) => {
            window.localStorage.setItem("ACCESS", data.access);
            window.localStorage.setItem("REFRESH", data.refresh);
        }).then(() => {
            ajaxService('/user/current').then((data) => {
                ajaxService(`/blogs/?user=${data['id']}`).then((data) => {
                    const blog_id = data[0].id;
                    navigate(`profile/${blog_id}/`, {replace: true});
                });
            });
        }).catch(() => {
            setError("неверные данные")
        });
    };

    const handleChangeLogin = (event) => {
        setError('')
        setLogin(event.target.value);
    }

    const handleChangePassword = (event) => {
        setError('')
        setPassword(event.target.value);
    }

    return (
        <form className={cx(style.form, style.form_login)}>
            <fieldset>
                <p className={style.lets_go}>Vaporwave, как и другие эстетики, вызывает ностальгию. Но даже
                    если вас не было в 90-ые, фотокарточки отправят вас в эпоху, которая
                    когда-то была...</p>
                <InputBlock text={"имя пользователя"} id={"login_username"} type={"username"}
                            value={login} onChange={handleChangeLogin}/>
                <InputBlock text={"пароль"} id={"login_password"} type={"password"}
                            value={password} onChange={handleChangePassword}/>
            </fieldset>
            <ForgotPassword error={error} color={'red'}/>
            <button type="submit" className={style.btn_login} onClick={handleSubmit}>войти</button>
        </form>
    )
}

export default SignInForm;