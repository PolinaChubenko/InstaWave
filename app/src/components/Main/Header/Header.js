import style from "./Header.module.css";
import cx from 'classnames';
import {Link} from 'react-router-dom';
import LogoImg from "../../LogoImg";
import {ReactComponent as ExitDoor} from "./../../../images/door-exit.svg";
import {ReactComponent as Profile} from "./../../../images/profile.svg";
import {ReactComponent as Tools} from "./../../../images/tools.svg";
import {ReactComponent as PhotoAdding} from "./../../../images/photo-add.svg";
import {ReactComponent as Search} from "./../../../images/search-title.svg";
import {useEffect, useState} from "react";
import {isLogin} from "../../../utils/isLogin";
import {ajaxService} from "../../../services/ajaxService";

const Header = () => {
    const [blogId, setBlogId] = useState(null);

    useEffect(() => {
        if (isLogin()) {
            ajaxService('/user/current').then((data) => {
                ajaxService(`/blogs/?user=${data['id']}`).then((data) => {
                    const blog_id = data[0].id;
                    setBlogId(blog_id);
                });
            });
        }
    }, []);

    function onLogout() {
        window.localStorage.setItem('ACCESS', '');
        window.localStorage.setItem('REFRESH', '');
    }

    return (
        <div className={style.header_wrapper}>
            <div></div>
            <div className={style.logo}>
                <LogoImg/>
                <p>instawave</p>
            </div>
            <div className={style.search_block}>
                <Link to='/search'> <Search className={cx(style.icon_svg_color, style.search_svg)} height='80px'/> </Link>
            </div>
            <div className={style.icons_block}>
                {blogId ? <Link to={`/profile/${blogId}/`} className={style.icon_link}>
                    <Profile className={cx(style.icon_svg, style.icon_svg_color)}/>
                </Link> : <p></p>}
                <Link to='/adding' className={style.icon_link}>
                    <PhotoAdding className={cx(style.icon_svg, style.icon_svg_color)}/>
                </Link>
            </div>
            <div className={style.icons_block}>
                <Link to='/settings' className={style.icon_link}>
                    <Tools className={cx(style.icon_svg, style.icon_svg_color)}/>
                </Link>
                <Link to='/' className={style.icon_link}>
                    <ExitDoor onClick={onLogout} className={cx(style.icon_svg, style.icon_svg_color)}/>
                </Link>
            </div>
            <div></div>
        </div>
    )
}

export default Header;