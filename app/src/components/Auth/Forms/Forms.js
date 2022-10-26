import React from 'react';
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";

class Forms extends React.Component {
    handleClick = (e) => {
        const switchers = [...document.querySelectorAll('.switcher')]

        switchers.forEach(item => {
            item.parentElement.classList.remove('is_active');
        });

        const id = e.target.id
        document.getElementById(id).parentElement.classList.add('is_active')
    }

    render() {
        return (
            <div className="forms">
                <div className="form_wrapper is_active">
                    <button id="btn_sign_in" type="button" onClick={(e) => this.handleClick(e)}
                            className="switcher switcher_login">
                        Sign in
                    </button>
                    <SignInForm/>
                </div>
                <div className="form_wrapper">
                    <button id="btn_sign_up" type="button" onClick={(e) => this.handleClick(e)}
                            className="switcher switcher_signup">
                        Sign Up
                    </button>
                    <SignUpForm/>
                </div>
            </div>
        );
    }
}

export default Forms;