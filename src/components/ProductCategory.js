import React from 'react'
import {useContext} from 'react';
import DataContext from "../context/DataContext";
import './../css/ProductCategory.css';
const ProductCategory = () => {
    const {firstFourCategories} = useContext(DataContext);
    return (
        <>
        <div className="Product-category-container">
            {firstFourCategories.map((cat)=>(
            <div className="show-card-container" key={cat.id}>
            <div className="show-card">
                <p className="show-card-title">{cat.categoryName}</p>
                <img className="show-card-image" src={cat.imgUrl} />
                <a className="show-card-link" href={"/products/"+cat.id} >See more</a>
            </div>
            </div>))}
            
        </div>
        </>
    )
}

export default ProductCategory
