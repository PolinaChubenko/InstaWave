import React, {useCallback, useEffect, useState} from 'react';
import Cropper from 'react-easy-crop'
import {getCroppedImg} from "../cropImage";
import Main from "../Main";
import style from "./PhotoAdding.module.css"
import {ReactComponent as PhotoCamera} from "./../../../images/photo-camera.svg";
import {ReactComponent as ArrowTo} from "./../../../images/arrow-to.svg";
import {useNavigate} from "react-router-dom";
import {isLogin} from "../../../utils/isLogin";
import {ajaxService} from "../../../services/ajaxService";
import ForgotPassword from "../../Auth/ForgotPassword/ForgotPassword";


const PhotoAdding = () => {
    const [file, setFile] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [user, setUser] = useState(null);
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
        if (!blobFile) {
            setError("пост не был добавлен");
            return;
        }
        const newImage = new File([blobFile], blobFile.name, { type: blobFile.type });
        const formData = new FormData();
        formData.append('image', newImage);
        ajaxService(`/blogs/?user=${user.id}`).then((data) => {
            const blog_id = data[0].id;
            formData.append('blog', blog_id);
            ajaxService(`/post/`, {
                method: 'POST',
                body: formData
            }).then(() => {
                navigate(`/profile/${blog_id}/`, {replace: true});
            });
        });
    };

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
                                    <input type="file" className={style.image_input}/>
                                    <PhotoCamera className={style.photo_camera}/>
                                </label>
                            </form>
                        }
                        {!file || !croppedImage ?
                            <button className={style.submit_button}
                                    type="submit"
                                    onClick={showCroppedImage}>обрезать
                            </button> :
                            <button className={style.submit_button}
                                    type="submit"
                                    onClick={handleSubmit}>опубликовать
                            </button>
                        }
                    </div>
                    <ArrowTo className={style.arrow_to}/>
                    <div className={style.image_preview}>
                        {croppedImage ?
                            <img alt="previewer" src={croppedImage}/> :
                            <div className={style.preview_text}>здесь отобразится загруженное вами изображение</div>}
                    </div>
                </div>
                <ForgotPassword error={error}/>
            </div>
        </Main>
    )
}

export default PhotoAdding;