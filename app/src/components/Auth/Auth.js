import Logo from "./Logo/Logo";
import FormsController from "./Forms/FormsController";
import style from "./Auth.module.css";
import {useEffect} from "react";

const Auth = () => {
    useEffect(() => {
        const theme = style.body_auth_theme;
        document.body.classList.add(theme);

        return () => {
            document.body.classList.remove(theme);
        }
    }, [])

    return (
        <div className={style.index_wrapper}>
            <div></div>
            <Logo/>
            <FormsController/>
            <div></div>
        </div>
    )
}

export default Auth;