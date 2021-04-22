import React from 'react'
import {useContext} from 'react';
import DataContext from "../context/DataContext";
import './../css/ProductCategory.css';
const ProductCategory = () => {
    const {firstFourCategories} = useContext(DataContext);
    return (
        <>
        <div className="Product-category-container">
            {firstFourCategories.map((cat,index)=>(
            <div className="show-card-container" key={index}>
            <div className="show-card">
                <p className="show-card-title">{cat}</p>
                <img className="show-card-image" src={"./images/category/"+cat+".webp"} />
                <a className="show-card-link" href={"/products/"+cat} >See more</a>
            </div>
            </div>))}
            
        </div>
        </>
    )
}

export default ProductCategory
