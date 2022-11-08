import LogoImg from "../../LogoImg";
import style from './Logo.module.css';


const Logo = () => {
    return (
        <div className={style.headline}>
            <p>instawave</p>
            <LogoImg />
        </div>
    )
}

export default Logo;