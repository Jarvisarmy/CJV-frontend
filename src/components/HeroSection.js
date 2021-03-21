import React from 'react'
import { Carousel } from 'react-bootstrap';
import './../css/HeroSection.css';
const HeroSection = () => {
    return (
        <Carousel className="Hero-section-container">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel/slide1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel/slide2.jpg"
                alt="Second slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel/slide3.jpg"
                alt="Third slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel/slide4.jpg"
                alt="Fourth slide"
              />

            </Carousel.Item>
        </Carousel>
    
    )
}

export default HeroSection
