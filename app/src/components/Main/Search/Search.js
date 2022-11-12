import Main from "../Main";
import style from "./Search.module.css";
import {useEffect} from "react";
import Found from "./Found";

const Search = () => {
    useEffect(() => {
        const height = style.main_height;
        const main = document.getElementsByClassName('Main');
        main[0].classList.add(height);

        return () => {
            main[0].classList.remove(height);
        }
    }, []);

    return (
        <Main>
            <div className={style.search_wrapper}>
                <div className={style.searcher}>
                    <input placeholder="поиск по имени пользователя"/>
                </div>
                <div className={style.search_result_block}>
                    <Found />
                    <Found />
                    <Found />
                    <Found />
                    <Found />
                    <Found />
                    <Found />
                    <Found />
                    <Found />
                    <Found />
                    <Found />
                    <Found />
                    <Found />
                    <Found />
                    <Found />
                    <Found />
                    <Found />
                </div>
            </div>
        </Main>
    )
}

export default Search;