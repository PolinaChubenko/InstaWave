import React from 'react';
import Main from "../Main";
import style from "./Settings.module.css"
import InputBlock from "./InputBlock";

class Settings extends React.Component {

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
            $imagePreview = (
                <div className={style.avatar_img}>
                    <img alt='avatar' src={imagePreviewUrl}/>
                </div>
            );
        } else {
            $imagePreview = (<div></div>);
        }

        return (
            <Main>
                <div>
                    <div className={style.settings_wrapper}>
                        <div className={style.preview_wrapper}>
                            <div className={style.upload_form}>
                                <form onSubmit={(e) => this._handleSubmit(e)}>
                                    <label className={style.image_upload}
                                           onChange={(e) => this._handleImageChange(e)}>
                                        выберите новую аватарку
                                        <input type="file" className={style.image_input}/>
                                    </label>
                                </form>
                            </div>
                            {$imagePreview}
                        </div>
                        <div className={style.description_form}>
                            <form>
                                <InputBlock text={"новое имя пользователя"} type={"username"}/>
                                <InputBlock text={"новая почта"} type={"username"}/>
                                <InputBlock text={"цитата"} type={"username"} maxLength={40}/>
                            </form>
                        </div>
                    </div>
                    <div className={style.button_wrapper}>
                        <button className={style.submit_button}
                                type="submit"
                                onClick={(e) => this._handleSubmit(e)}>обновить
                        </button>
                    </div>
                </div>
            </Main>
        )
    }
}

export default Settings;