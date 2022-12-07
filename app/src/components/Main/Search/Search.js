import Main from "../Main";
import style from "./Search.module.css";
import {useEffect, useState} from "react";
import Found from "./Found";
import {ajaxService} from '../../../services/ajaxService'

const Search = () => {
    useEffect(() => {
        const height = style.main_height;
        const main = document.getElementsByClassName('Main');
        main[0].classList.add(height);

        return () => {
            main[0].classList.remove(height);
        }
    }, []);

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        ajaxService('/blogs/').then((data) => {
            const blogs = [];

            data.forEach((blog) => {
                const blogElement = (
                    <Found
                        key={blog.id}
                        id={blog.id}
                        username={blog.user.username}
                        avatar={blog.avatar}
                        is_subscribed={true}
                    />
                );
                blogs.push(blogElement);
            });

            setBlogs(blogs);
        });
    }, []);

    return (
        <Main>
            <div className={style.search_wrapper}>
                <div className={style.searcher}>
                    <input placeholder="поиск по имени пользователя"/>
                </div>
                <div className={style.search_result_block}>
                    {blogs}
                </div>
            </div>
        </Main>
    )
}

export default Search;