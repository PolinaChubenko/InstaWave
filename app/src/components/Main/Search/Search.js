import Main from "../Main";
import style from "./Search.module.css";
import {useEffect, useState} from "react";
import Found from "./Found";
import {ajaxService} from '../../../services/ajaxService'
import {useNavigate} from "react-router-dom";

const Search = () => {
    useEffect(() => {
        const height = style.main_height;
        const main = document.getElementsByClassName('Main');
        main[0].classList.add(height);

        return () => {
            main[0]?.classList.remove(height);
        }
    }, []);

    const [blogs, setBlogs] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

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
        }).catch(() => {
            navigate("/", {replace: true});
        });
    }, []);

    const founded_blogs = !searchTerm
        ? blogs
        : blogs.filter(blog =>
            blog.props.username.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

    const nothing_founded = <p style={{textAlign: 'center'}}>увы, ничего не найдено</p>

    return (
        <Main>
            <div className={style.search_wrapper}>
                <div className={style.searcher}>
                    <input placeholder="поиск по имени пользователя"
                           value={searchTerm} onChange={handleChange}/>
                </div>
                <div className={style.search_result_block}>
                    {(founded_blogs && founded_blogs.length === 0 ? nothing_founded : founded_blogs )}
                </div>
            </div>
        </Main>
    )
}

export default Search;