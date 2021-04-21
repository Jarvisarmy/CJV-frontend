import React from 'react';
import './../css/Header.css';
import { FiMenu } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { BiCart } from 'react-icons/bi';
import {useContext} from 'react';
import DataContext from './../context/DataContext';
import {useState, useEffect} from 'react';

const Header = () => {
    const {isLogin, loginUser, categories} = useContext(DataContext);
    const [searchLink, setSearchLink] = useState("/products/0");
    const getSearchLink = ()=> {
        var val = document.getElementById("mySelect").value;
        var input = document.getElementById('header-searchBar').value;
        if (input === "") {
            if (val == 0) {
                setSearchLink("/products/"+val);
            } else {
                setSearchLink("/products/"+val);
            }
        } else {
            setSearchLink("/items/"+val+"/"+input)
        }
    }
    return (
        <div className="Header-container">
            <FiMenu className="header-menu-icon" />
            <div className="header-icon header-icon-logo">
            </div>
            <div className="header-searchBar-container">
                <select id="mySelect" onChange={getSearchLink}>
                    <option value={0} >All</option>
                    {categories.map((category,index)=>(
                        <option value={category} key={index}>{category}</option>
                    ))}
                </select>
                <input type="text" id="header-searchBar" name="searchBar" onChange={getSearchLink}/>
                <a className="header-search-button" href={searchLink}> <GoSearch  style={{width:"100%",height:'35px',paddingTop:"10px"}}/></a>
            </div>
            <select className="header-lan-select">lan</select>
            <a href="/login" className="header-sign-in">
                <div>
                    <span>{!isLogin? "Hello, Sign in" : loginUser.username}</span>
                </div>
            </a>
            <a href="" className="header-button">
                <div>
                    <span className="header-top"> Returns</span>
                    <span className="header-bottom"> & Orders</span>
                </div>
            </a>
            <a href="" className="header-button">
                <div>
                    <span className="header-top"> Try</span>
                    <span className="header-bottom"> Prime</span>
                </div>
            </a>
            <BiCart className="header-cart-icon" />
        </div>
    )
}

export default Header
