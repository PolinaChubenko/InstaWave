import style from './Logo.module.css'

const Logo = () => {
    return (
        <div className={style.headline}>
            <p>instawave</p>
            <img src={require("./../../../images/logo-final.png")}/>
        </div>
    )
}

export default Logo;