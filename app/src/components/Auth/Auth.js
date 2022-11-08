import Logo from "./Logo/Logo";
import FormsController from "./Forms/FormsController";
import style from "./Auth.module.css";

const Auth = () => {
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