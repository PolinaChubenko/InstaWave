import style from "./Main.module.css";
import Header from "./Header/Header";
import {useEffect} from "react";

const Main = () => {
    useEffect(() => {
        const theme = style.body_main_theme;
        document.body.classList.add(theme);

        return () => {
            document.body.classList.remove(theme);
        }
    }, [])

    return (
        <div className={style.main_wrapper}>
            <Header />
            <div className={style.content_wrapper}>
                <div></div>
                <div className={style.main}>
                    <p>Тут скоро будет наполнение, а пока вы читаете этот текст</p>
                </div>
            </div>

        </div>
    )
}

export default Main;