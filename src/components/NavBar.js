import React from 'react'
import {useContext} from 'react';
import DataContext from "../context/DataContext";
import './../css/NavBar.css';
const NavBar = () => {
    const {firstFourCategories} = useContext(DataContext);
    return (
        <div className="Navbar-container">
            <div>
                Select your address
            </div>
            <div className="navbar-category">
                <a href="/bestSellers" className="bestseller-link">
                    Best Sellers

                </a>
                {firstFourCategories.map((cat)=>(<a href={"/products/"+cat.id} key={cat.id}> {cat.categoryName} </a>))}
            </div>
            <div>
                New deals everyday
            </div>
        </div>
    )
}

export default NavBar
