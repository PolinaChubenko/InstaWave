import React, {useCallback, useEffect, useState} from 'react';
import Main from "../Main";
import style from "./Settings.module.css"
import InputBlock from "./InputBlock";
import {ajaxService} from "../../../services/ajaxService";
import {isLogin} from "../../../utils/isLogin";
import {useNavigate} from "react-router-dom";
import ForgotPassword from "../../Auth/ForgotPassword/ForgotPassword";
import {getCroppedImg} from "../cropImage";
import Cropper from "react-easy-crop";

const Settings = () => {
    const [file, setFile] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [user, setUser] = useState(null);
    const [quote, setQuote] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [blobFile, setBlobFile] = useState(null);

    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const showCroppedImage = useCallback(async () => {
        if (!file) {
            setError("пост не был добавлен");
            return;
        }
        const croppedImage = await getCroppedImg(
            imagePreviewUrl,
            file.name,
            croppedAreaPixels,
            setBlobFile
        )
        setCroppedImage(croppedImage)
    }, [croppedAreaPixels])

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
        if (blobFile) {
            const newImage = new File([blobFile], blobFile.name, { type: blobFile.type });
            formData.append('avatar', newImage);
        }
        if (quote) {
            formData.append('quote', quote);
        }
        if (!blobFile && !quote) {
            setError("никаких изменений не было сделано");
            return;
        }
        ajaxService(`/blogs/?user=${user.id}`).then((data) => {
            const blog_id = data[0].id;
            ajaxService(`/blogs/${blog_id}/`, {
                method: 'PUT',
                body: formData
            }).then(() => {
                navigate(`/profile/${blog_id}/`, {replace: true});
            });
        });
    };

    const handleQuoteChange = (event) => {
        setError('');
        setQuote(event.target.value);
    }

    const handleImageChange = (e) => {
        e.preventDefault();
        setError('');

        setFile(null);
        setImagePreviewUrl(null);
        setCroppedImage(null);
        setBlobFile(null);

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
                                {file && !croppedImage ?
                                    <div className={style.cropContainer}>
                                        <Cropper
                                            image={imagePreviewUrl}
                                            crop={crop}
                                            zoom={zoom}
                                            aspect={3 / 3}
                                            onCropChange={setCrop}
                                            onCropComplete={onCropComplete}
                                            onZoomChange={setZoom}
                                        />
                                    </div> :
                                    <form>
                                        <label className={style.image_upload}
                                               onChange={handleImageChange}>
                                            выберите новую аватарку
                                            <input type="file" className={style.image_input}/>
                                        </label>
                                    </form>
                                }
                            </div>
                            {croppedImage ? <div className={style.avatar_img}>
                                <img alt='avatar' src={croppedImage}/>
                            </div> : <div></div>}
                        </div>
                        <div className={style.description_form}>
                            <form>
                                <InputBlock text={"цитата"} type={"username"} maxLength={65}
                                            value={quote} onChange={handleQuoteChange}/>
                            </form>
                        </div>
                    </div>
                    <div className={style.button_wrapper}>
                        {file && !croppedImage ?
                            <button className={style.submit_button}
                                    type="submit"
                                    onClick={showCroppedImage}>обрезать
                            </button> :
                            <button className={style.submit_button}
                                    type="submit"
                                    onClick={handleSubmit}>обновить
                            </button>
                        }
                    </div>
                    <ForgotPassword error={error}/>
                </div>
            </Main>
        )
}

export default Settings;