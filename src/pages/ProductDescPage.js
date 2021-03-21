import React from 'react';
import './../css/ProductDescPage.css';
const ProductDescPage = (props) => {
    if (props.product !== undefined) {
        return (

            <div className="product-desc-container">
                <div className="product-desc-image">
                    <img src={props.product.image}></img>
                </div>
                <div className="product-desc-content">
                    <div className="product-desc-title">{props.product.title}</div>   
                    <div className="product-desc-price">Price: <span>CDN${props.product.price}</span></div>
                    <div className="product-desc-desc">{props.product.desc}</div>
                    <div className="product-in-stock">In Stock</div>
                    <div className="product-quantity">
                        <label for="quantity" className="quantity-label">Quantity:</label>
                        <select name="quantity" autocomplete="off" id="quantity" className="quantity-select">
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div> 
        )
    } else {
        return (<div>this item is not available yet</div>)
    }
}
  
export default ProductDescPage
