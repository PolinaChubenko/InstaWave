import React from 'react';
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";

const Forms = () => {
    const [active_form, set_active_form] = React.useState("signin")

    return (
        <div className="forms">
            <div className={"form_wrapper " + (active_form === "signin" ? "is_active" : " ")}>
                <button id="btn_sign_in" type="button" onClick={() => set_active_form("signin")}
                        className="switcher switcher_login">
                    Sign in
                </button>
                <SignInForm/>
            </div>

            <div className={"form_wrapper " + (active_form === "signup" ? "is_active" : " ")}>
                <button id="btn_sign_up" type="button" onClick={() => set_active_form("signup")}
                        className="switcher switcher_signup">
                    Sign Up
                </button>
                <SignUpForm/>
            </div>
        </div>
    );
}

export default Forms;