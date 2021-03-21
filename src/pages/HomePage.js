import React from 'react'
import Header from './../components/Header.js'
import NavBar from './../components/NavBar.js'
import HeroSection from './../components/HeroSection.js'
import ProductCategorySection from './../components/ProductCategory'
import BestSellerSection from './../components/BestSeller'
import Footer from './../components/Footer'
const HomePage = () => {
    return (
        <>
            <Header />
            <NavBar />
            <HeroSection />
            <ProductCategorySection />
            <BestSellerSection />
            <Footer />
        </>
    )
}

export default HomePage
