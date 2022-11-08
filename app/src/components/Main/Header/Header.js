import style from "./Header.module.css"
import LogoImg from "../../LogoImg";

const Header = () => {
    return (
        <div className={style.header_wrapper}>
            <div></div>
            <div className={style.logo}>
                <LogoImg/>
            </div>
            <div></div>
        </div>
    )
}

export default Header;