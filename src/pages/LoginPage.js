import React from 'react';
import { useState } from 'react';
import { IoAlert } from 'react-icons/io5';
import './../css/Form.css';
import {Redirect, Link} from 'react-router-dom';
import {useContext} from 'react';
import DataContext from './../context/DataContext';
import { BiWindowOpen } from 'react-icons/bi';
import context from 'react-bootstrap/esm/AccordionContext';
import constant from './../constant.js';

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameErr, setUsernameErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const {isLogin, setIsLogin, setLoginUser} = useContext(DataContext);
    const checkValid = ()=> {
        var isValid = true;
        if (username === "") {
            setUsernameErr("the username is empty");
            isValid = false;
        } else {
            setUsernameErr("");
        }
        if (password === "") {
            setPasswordErr("the password is empty");
            isValid = false;
        } else {
            setPasswordErr("");
        }
        return isValid;
    }
    const login = ()=>{
        if (checkValid()) {
            fetch(constant.url+'auth',{
                method:"POST",
                headers: {
                    'Content-Type':"application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
                .then(response=>{
                    if (response.status === 403) {
                        setUsernameErr("invalid username or password");
                    } else {
                        setIsLogin(true);
                        console.log(isLogin);
                        response.json().then(res=>{
                            setLoginUser(res.body[0]);
                        }).catch(err=>{
                            console.log(err);
                        })
                        document.getElementById("login").click();
                    }
                })
                .catch(err=>{
                    setUsernameErr("invalid username or password");
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
                <h1 className="form-title"> Sign-in</h1>
                <div className="form-input">
                    <label className="form-label" htmlFor="login-username"> username </label>
                    <br />
                    <input className="form-input-content" type="text" id="login-username" value={username} onChange={(event)=>{
                        setUsername(event.target.value);
                    }}/>
                    <div>
                        <div className="alert-content">
                            {usernameErr}

                        </div>
                    </div>
                    <label className="form-label" htmlFor="login-password"> password </label>
                    <br />
                    <input className="form-input-content" type="text" id="login-password" value={password} onChange={(event)=>{
                        setPassword(event.target.value);
                    }}/>
                    <div>
                        <div className="alert-content">
                            {passwordErr}

                        </div>
                    </div>
                </div>
                <button className="form-yellow-button" onClick={login}>Continue</button>
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
        <Link className="display" to="/dashboard" id="login" />
        </div>
    )
}

export default LoginPage
