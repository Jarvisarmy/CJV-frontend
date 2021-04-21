import React from 'react'
import { useState } from 'react';
import { IoAlert } from 'react-icons/io5';
import './../css/Form.css';
import {Link} from 'react-router-dom';
const RegistrationPage = () => {
    const [firstname, setFirstname] = useState("");
    const [firstnameMsg, setFirstnameMsg] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameMsg, setLastnameMsg] = useState("");
    const [email,setEmail] = useState("");
    const [emailMsg, setEmailMsg] = useState("");
    const [username, setUsername] = useState("");
    const [usernameMsg, setUsernameMsg] = useState("");
    const [password, setPassword] = useState("");
    const [passwordMsg, setPasswordMsg] = useState("");

    const checkValid = () => {
        var isValid = true;
        // regular expression taken from chromium
        var rePassword = new RegExp(/[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/);
        var reEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (password == "") {
            setPasswordMsg("Type your password again");
            isValid = false;
        } else if (password.length < 6) {
            setPasswordMsg("Passwords do not match");
            isValid = false;
        } else if (password.length > 12) {
            setPasswordMsg("Passwords do not match");
            isValid = false;
        } else if (rePassword.test(password)) {
            setPasswordMsg("Password contains special character");
            isValid = false;
        } else {
            setPasswordMsg("");
        }
        if (!reEmail.test(String(email).toLowerCase())) {
            setEmailMsg("Invalid e-mail address");
            isValid = false;
        } else {
            setEmailMsg("");
        }
        if (firstname === "") {
            setFirstnameMsg("first name is empty");
            isValid = false;
        } else {
            setFirstnameMsg("");
        }
        if (lastname === "") {
            setLastnameMsg("last name is empty");
            isValid = false;
        } else {
            setLastnameMsg("");
        }
        if (username === "") {
            setUsernameMsg("the username is empty");
            isValid = false;
        } else {
            setUsernameMsg("");
        }
        return isValid;

    }
    const register = ()=>{
        if (checkValid) {
            fetch('http://localhost:5000/users',{
                method:"POST",
                headers: {
                    'Content-Type':"application/json"
                },
                body: JSON.stringify({
                    firstName: firstname,
                    lastName: lastname,
                    email:email,
                    username: username,
                    password: password,
                    role:"user"
                })
            })
                .then(response=>{
                    if (response.status === 400) {
                        setUsernameMsg("the username exists");
                    } else {
                        
                        document.getElementById("login").click();
                    }
                })
                .catch(err=>{
                    console.log(err);
            });
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
                        <label className="form-label" htmlFor="reg-firstname"> first name </label>
                        <br />
                        <input className="form-input-content" type="text" id="reg-firstname" value={firstname} onChange={(event)=>{
                            setFirstname(event.target.value);
                        }}/>
                        <div>
                            <div className="alert-content">
                                {firstnameMsg}

                            </div>
                        </div>
                    </div>
                    <div className="form-input">
                        <label className="form-label" htmlFor="reg-lastname"> Your name </label>
                        <br />
                        <input className="form-input-content" type="text" id="reg-lastname" value={lastname} onChange={(event)=>{
                            setLastname(event.target.value);
                        }}/>
                        <div>
                            <div className="alert-content">
                                {lastnameMsg}

                            </div>
                        </div>
                    </div>
                    <div className="form-input">
                        <label className="form-label" htmlFor="reg-email"> Email </label>
                        <br />
                        <input className="form-input-content" type="text" id="reg-email" value={email} onChange={(event)=>{
                            setEmail(event.target.value);
                        }}/>
                        <div>
                            <div className="alert-content">
                                {emailMsg}

                            </div>
                        </div>
                    </div>
                    <div className="form-input">
                        <label className="form-label" htmlFor="reg-username"> username </label>
                        <br />
                        <input className="form-input-content" type="text" id="reg-username" value={username} onChange={(event)=>{
                            setUsername(event.target.value);
                        }}/>
                        <div>
                            <div className="alert-content">
                                {usernameMsg}

                            </div>
                        </div>
                    </div>
                    <div className="form-input">
                        <label className="form-label" htmlFor="reg-password"> Password </label>
                        <br />
                        <input className="form-input-content" type="text" id="reg-password" placeholder="Password length between 6 to 12" value={password} onChange={(event)=>{
                            setPassword(event.target.value);
                        }}/>
                        <div>
                            <div className="alert-content">
                                {passwordMsg}

                            </div>
                        </div>
                    </div>
                    <button className="form-yellow-button" onClick={register}>Create your Amazon account</button>
                    <p href="" className="form-policy">By continuing, you agree to Amazon's <a>Conditions of Use and Privacy Notice</a>.</p>
                    <div className="form-footer-divider">
                        <div className="form-footer-divider-inner">

                        </div>
                    </div>
                    <p className="reg-link"> Already have an account? <Link id="login" to="/login">Sign in</Link></p>
                    <p className="reg-link">Purchasing for work? <Link>Create a business account</Link></p>
                    
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
