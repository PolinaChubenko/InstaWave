import React, {useEffect, useState} from 'react';
import Main from "../Main";
import style from "./Settings.module.css"
import InputBlock from "./InputBlock";
import {ajaxService} from "../../../services/ajaxService";
import {isLogin} from "../../../utils/isLogin";
import {useNavigate} from "react-router-dom";
import ForgotPassword from "../../Auth/ForgotPassword/ForgotPassword";

const Settings = () => {
    const [file, setFile] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [user, setUser] = useState(null);
    const [quote, setQuote] = useState('');
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
        const formData = new FormData();
        if (file) {
            formData.append('avatar', file);
        }
        if (quote) {
            formData.append('quote', quote);
        }
        if (!file && !quote) {
            setError("никаких изменений не было сделано");
            return;
        }
        ajaxService(`/blogs/${user.id}/`, {
            method: 'PUT',
            body: formData
        }).then(() => {
            navigate(`/profile/${user.id}/`, {replace: true});
        });
    };

    const handleQuoteChange = (event) => {
        setError('');
        setQuote(event.target.value);
    }

    const handleImageChange = (e) => {
        e.preventDefault();
        setError('');
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setFile(file)
            setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(file)
    }

    return (
            <Main>
                <div>
                    <div className={style.settings_wrapper}>
                        <div className={style.preview_wrapper}>
                            <div className={style.upload_form}>
                                <form onSubmit={handleSubmit}>
                                    <label className={style.image_upload}
                                           onChange={handleImageChange}>
                                        выберите новую аватарку
                                        <input type="file" className={style.image_input}/>
                                    </label>
                                </form>
                            </div>
                            {imagePreviewUrl ? <div className={style.avatar_img}>
                                <img alt='avatar' src={imagePreviewUrl}/>
                            </div> : <div></div>}
                        </div>
                        <div className={style.description_form}>
                            <form>
                                {/*<InputBlock text={"новое имя пользователя"} type={"username"}/>*/}
                                {/*<InputBlock text={"новая почта"} type={"username"}/>*/}
                                <InputBlock text={"цитата"} type={"username"} maxLength={40}
                                            value={quote} onChange={handleQuoteChange}/>
                            </form>
                        </div>
                    </div>
                    <div className={style.button_wrapper}>
                        <button className={style.submit_button}
                                type="submit"
                                onClick={handleSubmit}>обновить
                        </button>
                    </div>
                    <ForgotPassword error={error}/>
                </div>
            </Main>
        )
}

export default Settings;