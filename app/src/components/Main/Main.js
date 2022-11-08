import style from "./Main.module.css";
import Header from "./Header/Header";

const Main = () => {
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