import React from 'react';
import { useState } from 'react';
import { IoAlert } from 'react-icons/io5';

const LoginPage = () => {
    const [account, setAccount] = useState("");
    const [err, setErr] = useState(false);
    const checkValid = ()=> {
        if (account == "") {
            setErr(true);
        } else {
            setErr(false);
        }
    }
    return (
        <div className="form-outside-container">
        <div className="form-logo">
            <div className="form-icon form-icon-logo"></div>
        </div>
        <div className="form-inside-container">
            <div className="form-main">
                <h1 className="form-title"> Sign-in</h1>
                <div className="form-input">
                    <label className="form-label" htmlFor="login-email-phone"> E-mail address or mobile phone number </label>
                    <br />
                    <input className="form-input-content" type="text" id="login-email-phone" value={account} onChange={(event)=>{
                        setAccount(event.target.value);
                    }}/>
                    <div className={err ? "alert" : "alert hidden"}>
                        <IoAlert className="alert-icon"/>
                        <div className="alert-content">
                            Enter your e-mail address or mobile phone number

                        </div>
                    </div>
                </div>
                <button className="form-yellow-button" onClick={checkValid}>Continue</button>
                <p href="" className="form-policy">By continuing, you agree to Amazon's <a>Conditions of Use and Privacy Notice</a>.</p>
                <a href="" className="login-help"> Need Help?</a>
            </div>
            <div className="login-bottom">
                <div className="login-divider">
                    <h5> New to Amazon?</h5>
                </div>
                <a href="/registration"><button className="login-create-button"> Create your Amazon account </button></a>
                <div className="form-footer-divider">
                    <div className="form-footer-divider-inner">

                    </div>
                </div>
                <div className="form-footer">
                    <a>Conditions</a>
                    <a> Privacy Notice</a>
                    <a> Help</a>
                </div>
            </div>
            <p className="form-auth"> @ 2008-2021, Amazon.com, Inc. or its affiliates</p>
        </div>
        </div>
    )
}

export default LoginPage
