import React from 'react';
import DealOfTheDay from '../../Components/DealOfTheDay/DealOfTheDay';
import ExclusiveProducts from '../../Components/ExclusiveProducts/ExclusiveProducts';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import MostViewedSlider from '../../Components/MostViewdSlider/MostViewedSlider';
import TopCategories from '../../Components/TopCategories/TopCategories';
import TopProducts from '../../Components/TopProducts/TopProducts';

const Home = () => {
    return (
        <div>
            <HomeSlider />
            <TopCategories />
            <MostViewedSlider />
            <TopProducts />
            <ExclusiveProducts />
            <DealOfTheDay />
        </div>
    );
};

export default Home;