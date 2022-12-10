import React, {useEffect, useState} from 'react';
import Main from "../Main";
import style from "./PhotoAdding.module.css"
import {ReactComponent as PhotoCamera} from "./../../../images/photo-camera.svg";
import {ReactComponent as ArrowTo} from "./../../../images/arrow-to.svg";
import {useNavigate} from "react-router-dom";
import {isLogin} from "../../../utils/isLogin";
import {ajaxService} from "../../../services/ajaxService";
import ForgotPassword from "../../Auth/ForgotPassword/ForgotPassword";

// import {useNavigate} from "react-router-dom";

const PhotoAdding = () => {
    const [file, setFile] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin()) {
            ajaxService('/user/current').then((data) => {
                setUser(data);
            });
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(file);
        console.log(user.id);
        const formData = new FormData();
        if (!file) {
            setError("пост не был добавлен");
            return;
        }
        formData.append('image', file);
        ajaxService(`/blogs/?user=${user.id}`).then((data) => {
            const blog_id = data[0].id;
            formData.append('blog', blog_id);
            ajaxService(`/post/`, {
                method: 'POST',
                body: formData
            }).then(() => {
                navigate(`/profile/${user.id}/`, {replace: true});
            });
        });
    };


    const handleImageChange = (e) => {
        e.preventDefault();
        setError('');
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setFile(file);
            setImagePreviewUrl(reader.result);
        }
        reader.readAsDataURL(file)
    }

    return (
        <Main>
            <div>
                <div className={style.preview_wrapper}>
                    <div className={style.upload_form}>
                        <form onSubmit={handleSubmit}>
                            <label className={style.image_upload}
                                   onChange={handleImageChange}>
                                <input type="file" className={style.image_input}/>
                                <PhotoCamera className={style.photo_camera}/>
                            </label>
                        </form>
                        <button className={style.submit_button}
                                type="submit"
                                onClick={handleSubmit}>опубликовать
                        </button>
                    </div>
                    <ArrowTo className={style.arrow_to}/>
                    <div className={style.image_preview}>
                        {imagePreviewUrl ?
                            <img alt="previewer" src={imagePreviewUrl}/> :
                            <div className={style.preview_text}>здесь отобразится загруженное вами изображение</div>}
                    </div>
                </div>
                <ForgotPassword error={error}/>
            </div>
        </Main>
    )
}

export default PhotoAdding;