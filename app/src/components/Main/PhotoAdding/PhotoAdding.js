import React from 'react';
import Main from "../Main";
import style from "./PhotoAdding.module.css"
import {ReactComponent as PhotoCamera} from "./../../../images/photo-camera.svg";
import {ReactComponent as ArrowTo} from "./../../../images/arrow-to.svg";

class PhotoAdding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {file: '', imagePreviewUrl: ''};
    }

    _handleSubmit(e) {
        e.preventDefault();
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img alt="previewer" src={imagePreviewUrl}/>);
        } else {
            $imagePreview = (<div className={style.preview_text}>здесь отобразится
                загруженное вами изображение</div>);
        }

        return (
            <Main>
                <div className={style.preview_wrapper}>
                    <div className={style.upload_form}>
                        <form onSubmit={(e) => this._handleSubmit(e)}>
                            <label className={style.image_upload}
                                   onChange={(e) => this._handleImageChange(e)}>
                                <input type="file" className={style.image_input}/>
                                <PhotoCamera className={style.photo_camera}/>
                            </label>
                            <button className={style.submit_button}
                                    type="submit"
                                    onClick={(e) => this._handleSubmit(e)}>опубликовать
                            </button>
                        </form>
                    </div>
                    <ArrowTo className={style.arrow_to}/>
                    <div className={style.image_preview}>
                        {$imagePreview}
                    </div>
                </div>
            </Main>
        )
    }
}

export default PhotoAdding;