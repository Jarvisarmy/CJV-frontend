import React from 'react'
import { Carousel } from 'react-bootstrap';
import {useContext} from 'react';
import DataContext from "../context/DataContext";
import './../css/BestSellers.css';
const BestSeller = () => {
    const {getBestSellers} = useContext(DataContext);

    var modifyProducts = (lists)=>{
        var result = [];
        if (lists !== []) {
            for (var i = 0; i < lists.length/4; i++) {
                var temp = [];
                for (var j = 0; j < 4; j++) {
                    
                    var index = 4*i + j;
                    if (index < lists.length) {
                        temp.push(lists[index]);
                    }
                }
                result.push(temp);
            }
        }
        return result;
    }
    return (
        <div className="Best-seller-container">
            <div className="best-seller-section-title"> Best Sellers</div> <a href="/bestSellers">See more</a>
            <Carousel className="best-seller-carousel" indicators={false}>
                
                {modifyProducts(getBestSellers()).map((lists,index)=>(
                    <Carousel.Item key={index}>
                        <div className="carousel-item-container">
                        
                        {lists.map((item) => (
                            
                            <div className="best-seller-section-item-container" key={item.id}>
                                <a href={"/product/"+item.id}>
                                <img className="best-seller-section-item-image" src={item.image} alt={item.title}/>
                                </a>
                            </div>
                        ))}
                        </div>
                        
                    </Carousel.Item>
                ))}
            
            
        </Carousel>
        </div>
    )
}
export default BestSeller
