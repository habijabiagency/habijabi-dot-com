import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import NavbarTop from '../Components/NavbarTop/NavbarTop';
import HomeSlider from '../Components/HomeSlider/HomeSlider';
import MostViewedSlider from '../Components/MostViewdSlider/MostViewedSlider';
import TopProducts from '../Components/TopProducts/TopProducts';
import ExclusiveProducts from '../Components/ExclusiveProducts/ExclusiveProducts';
import DealOfTheDay from '../Components/DealOfTheDay/DealOfTheDay';

const Main = () => {
    return (
        <div>
            <NavbarTop />
            <Navbar />
            <HomeSlider />
            <MostViewedSlider />
            <TopProducts />
            <ExclusiveProducts />
            <DealOfTheDay />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;