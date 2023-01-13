import React from 'react';
import LeftSideNav from './LeftSideNav';
import Products from './Products';

const AllProducts = () => {
    return (
        <div className='mt-5'>
            <div className='grid grid-cols-4 mb-20'>
                <div className="col-span-1 hidden md:block"><LeftSideNav></LeftSideNav></div>
                <div className='col-span-3 border-l pl-5'><Products /></div>
            </div>
        </div>
    );
};

export default AllProducts;