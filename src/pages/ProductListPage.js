import React from 'react';
import {useState, useEffect} from 'react';
const ProductListPage = (props) => {
    const [curPage, setCurPage] = useState(1);
    const [productsOnPage, setProductsOnPage] = useState([]);
    
    const getPages = ()=>{
        var result = []
        for (var i = 0; i<=props.products.length/12; i++) {
            var temp = [];
            for (var j = 0; j < 12; j++) {

                var ind = 12*i + j;
                if (ind < props.products.length) {
                    temp.push(props.products[ind]);
                }
            }
            if (temp.length !== 0) {
                result.push(temp);
            }
        }
        return result;
    };
    useEffect(()=>{
        var result = getPages();
        setProductsOnPage(result);
    },[productsOnPage]);
    return (
        

        <>
        {productsOnPage.map((page, index)=>(
            <div className= {index === curPage-1 ? "product-list-container" : "hidden"}>
                {productsOnPage[index].map((product)=>(
                    <a className="product-item-container" key={product.id} href={"/product/"+product.id} >
                    <div style={{position:"relative"}}>
                        <div className={product.isBest ? "product-tag" : "hidden"}>Best seller </div>
                        <img className="product-image" src={product.image} />
                        <p className="product-title"> {product.title}</p>
                        <p className="product-price">CDN$ {product.price}</p>
                    </div>
                    </a>
                ))}
            </div>
        ))}

        <div className="pagination-container">
            <ol className="pagination">
                {productsOnPage.map((page,index)=>(
                    <li className={curPage-1===index ? "pagination-item pagination-item-active":"pagination-item"} key={index+1} value={index+1} onClick={()=>{
                        setCurPage(index+1);
                    }}>{index+1}</li>
                ))}
            </ol>
        </div>
        </>
    )
}



export default ProductListPage
