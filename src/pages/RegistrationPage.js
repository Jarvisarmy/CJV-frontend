import React from 'react'
import { useState } from 'react';
import { IoAlert } from 'react-icons/io5';
const RegistrationPage = () => {
    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState(false);
    const [nameMsg, setNameMsg] = useState("");
    const [email,setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [emailMsg, setEmailMsg] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState(false);
    const [passwordMsg, setPasswordMsg] = useState("");

    const checkValid = () => {
        // regular expression taken from chromium
        var rePassword = new RegExp(/[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/);
        var reEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (password == "") {
            setPasswordErr(true);
            setPasswordMsg("Type your password again");
        } else if (password.length < 6) {
            setPasswordErr(true);
            setPasswordMsg("Passwords do not match");
        } else if (password.length > 12) {
            setPasswordErr(true);
            setPasswordMsg("Passwords do not match");
        } else if (rePassword.test(password)) {
            setPasswordErr(true);
            setPasswordMsg("Password contains special character");
        } else {
            setPasswordErr(false);
            setPasswordMsg("");
        }
        if (!reEmail.test(String(email).toLowerCase())) {
            setEmailErr(true);
            setEmailMsg("Invalid e-mail address");
        } else {
            setEmailErr(false);
            setEmailMsg("");
        }
        if (name === "") {
            setNameErr(true);
            setNameMsg("Enter your name");
        } else {
            setNameErr(false);
            setNameMsg("");
        }

    }
    return (
        <div className="form-outside-container">
            <div className="form-logo">
                <div className="form-icon form-icon-logo"></div>
            </div>
            <div className="form-inside-container">
                <div className="form-main">
                    <h1 className="form-title">Create account</h1>
                    <div className="form-input">
                        <label className="form-label" htmlFor="reg-name"> Your name </label>
                        <br />
                        <input className="form-input-content" type="text" id="reg-name" value={name} onChange={(event)=>{
                            setName(event.target.value);
                        }}/>
                        <div className={nameErr ? "alert" : "alert hidden"}>
                            <IoAlert className="alert-icon"/>
                            <div className="alert-content">
                                {nameMsg}

                            </div>
                        </div>
                    </div>
                    <div className="form-input">
                        <label className="form-label" htmlFor="reg-email"> Email </label>
                        <br />
                        <input className="form-input-content" type="text" id="reg-email" value={email} onChange={(event)=>{
                            setEmail(event.target.value);
                        }}/>
                        <div className={emailErr ? "alert" : "alert hidden"}>
                            <IoAlert className="alert-icon"/>
                            <div className="alert-content">
                                {emailMsg}

                            </div>
                        </div>
                    </div>
                    <div className="form-input">
                        <label className="form-label" htmlFor="reg-password"> Password </label>
                        <br />
                        <input className="form-input-content" type="text" id="reg-password" placeholder="Password length between 6 to 12" value={password} onChange={(event)=>{
                            setPassword(event.target.value);
                        }}/>
                        <div className={passwordErr ? "alert" : "alert hidden"}>
                            <IoAlert className="alert-icon"/>
                            <div className="alert-content">
                                {passwordMsg}

                            </div>
                        </div>
                    </div>
                    <button className="form-yellow-button" onClick={checkValid}>Create your Amazon account</button>
                    <p href="" className="form-policy">By continuing, you agree to Amazon's <a>Conditions of Use and Privacy Notice</a>.</p>
                    <div className="form-footer-divider">
                        <div className="form-footer-divider-inner">

                        </div>
                    </div>
                    <p className="reg-link"> Already have an account? <a href="/login">Sign in</a></p>
                    <p className="reg-link">Purchasing for work? <a>Create a business account</a></p>
                    
                </div>
                <div className="form-footer-divider">
                    <div className="form-footer-divider-inner">
                    </div>
                </div>
                <div className="form-footer">
                    <a>Conditions</a>
                    <a> Privacy Notice</a>
                    <a> Help</a>
                </div>
                <p className="form-auth"> @ 2008-2021, Amazon.com, Inc. or its affiliates</p>
                
            </div>
            
        </div>
    )
}

export default RegistrationPage
