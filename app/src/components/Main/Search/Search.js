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
            main[0]?.classList.remove(height);
        }
    }, []);

    const [blogs, setBlogs] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentUserId, setCurrentUserId] = useState(null);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        ajaxService('/user/current').then((data) => {
            setCurrentUserId(data['id']);
        });
    }, []);

    useEffect(() => {
        if (currentUserId !== null) {
            const subscriptions = [];
            ajaxService(`/following/?who=${currentUserId}`).then((data) => {
                data.forEach((subscription) => {
                    subscriptions.push(subscription.following_user.id);
                });
            }).then(() => {
                ajaxService('/blogs/').then((data) => {
                    const blogs = [];
                    data.forEach((blog) => {
                        const is_me = Boolean(blog.user.id === currentUserId);
                        const is_subscribed = Boolean(subscriptions.indexOf(blog.user.id) > -1);
                        const blogElement = (
                            <Found
                                key={blog.id}
                                id={blog.id}
                                username={blog.user.username}
                                avatar={blog.avatar}
                                is_subscribed={is_subscribed}
                                is_me={is_me}
                            />
                        );
                        blogs.push(blogElement);
                    });

                    setBlogs(blogs);
                });
            })
        }
    }, [currentUserId]);

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