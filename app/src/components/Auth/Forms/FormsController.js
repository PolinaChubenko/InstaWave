import React from 'react';
import cx from 'classnames';
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import style from "./Forms.module.css";

const FormsController = () => {
    const [active_form, set_active_form] = React.useState("signin")

    return (
        <div className={style.forms}>
            <div className={cx(style.form_wrapper, {[style.is_active] : active_form === "signin"})}>
                <button id="btn_sign_in" type="button" onClick={() => set_active_form("signin")}
                        className={cx(style.switcher, style.switcher_login)}>
                    Sign in
                </button>
                <SignInForm/>
            </div>

            <div className={cx(style.form_wrapper, {[style.is_active] : active_form === "signup"})}>
                <button id="btn_sign_up" type="button" onClick={() => set_active_form("signup")}
                        className={cx(style.switcher, style.switcher_signup)}>
                    Sign Up
                </button>
                <SignUpForm/>
            </div>
        </div>
    );
}

export default FormsController;