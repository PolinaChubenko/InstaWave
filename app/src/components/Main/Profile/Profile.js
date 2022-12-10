import Main from "../Main";
import InfoBlock from "./InfoBlock";
import Posts from "./Posts";
import {ajaxService} from '../../../services/ajaxService'
import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import Loader from "../../Loader";
import {isLogin} from "../../../utils/isLogin";

const Profile = () => {
    const [blog, setBlog] = useState(null);
    const [user, setUser] = useState(null);
    const [blogId, setBlogId] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    // useEffect(() => {
        // ajaxService(`/blogs/?user=${params.id}`).then((data) => {
        //     const blog_id = data[0].id;
        //     setBlogId(blog_id);
        //     ajaxService(`/blogs/${params.id}/`).then((data) => {
        //         setBlog(data);
        //     });
        // });
    // }, [params])

    useEffect(() => {
        if (isLogin()) {
            ajaxService('/user/current').then((data) => {
                setUser(data);
            });
            ajaxService(`/blogs/${params.id}/`).then((data) => {
                setBlog(data);
            });
        }
    }, [params]);

    return (
        <Main>
            {
                blog ? <InfoBlock username={blog.user.username} total_followings={blog.total_followings}
                                  total_followers={blog.total_followers} total_posts={blog.total_posts}
                                  quote={blog.quote} avatar={blog.avatar} key={blog.id}
                                  blog_user_id={blog.user.id} current_user_id={user.id}/>
                    : <Loader/>
            }
            {
                blog ? <Posts post_set={blog.post_set}/> : <Loader/>
            }

        </Main>
    )
}

export default Profile;