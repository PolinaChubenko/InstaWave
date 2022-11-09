import style from "./Header.module.css";
import {Link} from 'react-router-dom';
import LogoImg from "../../LogoImg";
import {ReactComponent as ExitDoor} from "./../../../images/door-exit.svg";
import {ReactComponent as Profile} from "./../../../images/profile.svg";
import {ReactComponent as Tools} from "./../../../images/tools.svg";
import {ReactComponent as PhotoAdding} from "./../../../images/photo-add.svg";
import {ReactComponent as Search} from "./../../../images/search-title.svg";

const Header = () => {
    return (
        <div className={style.header_wrapper}>
            <div></div>
            <div className={style.logo}>
                <LogoImg/>
                <Link to='/search'> <Search fill='#F841B5' height='40px' width='40px'/> </Link>
                <Link to='/profile'> <Profile fill='#F841B5' height='40px' width='40px'/></Link>
                <Link to='/adding'> <PhotoAdding fill='#F841B5' height='40px' width='40px'/></Link>
                <Link to='/settings'> <Tools fill='#F841B5' height='40px' width='40px'/></Link>
                <Link to='/'> <ExitDoor fill='#F841B5' height='40px' width='40px'/></Link>
            </div>
            <div></div>
        </div>
    )
}

export default Header;