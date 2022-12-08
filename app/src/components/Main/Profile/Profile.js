import Main from "../Main";
import InfoBlock from "./InfoBlock";
import Posts from "./Posts";
import {ajaxService} from '../../../services/ajaxService'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Loader from "../../Loader";

const Profile = () => {
    const [blog, setBlog] = useState(null)
    const params = useParams();

    useEffect(() => {
        ajaxService(`/blogs/${params.id}/`).then((data) => {
            setBlog(data);
        });
    }, [params])

    return (
        <Main>
            {
                blog ? <InfoBlock username={blog.user.username} total_followings={blog.total_followings}
                                  total_followers={blog.total_followers} total_posts={blog.total_posts}
                                  quote={blog.quote} avatar={blog.avatar} key={blog.id} is_subscribed={false}/>
                    : <Loader/>
            }
            {
                blog ? <Posts post_set={blog.post_set}/> : <Loader/>
            }

        </Main>
    )
}

export default Profile;