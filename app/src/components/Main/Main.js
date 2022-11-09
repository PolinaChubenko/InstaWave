import style from "./Main.module.css";
import {useEffect} from "react";
import Header from "./Header/Header";

const Main = ({children}) => {
    useEffect(() => {
        const theme = style.body_main_theme;
        document.body.classList.add(theme);

        return () => {
            document.body.classList.remove(theme);
        }
    }, [])

    return (
        <div className={style.main_wrapper}>
            <Header/>
                <div className={style.content_wrapper}>
                    <div></div>
                    <div className={style.main}>
                        {children}
                    </div>
                    <div></div>
                </div>
        </div>
    )
}

export default Main;