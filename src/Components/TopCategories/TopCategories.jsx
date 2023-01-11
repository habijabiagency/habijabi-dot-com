import React from 'react';
import { BiChair } from 'react-icons/bi';
import { GiSofa, GiTable } from 'react-icons/gi';
import { TbArmchair2 } from "react-icons/tb";
import { Link } from 'react-router-dom';

const TopCategories = () => {
    return (
        <div className='mx-auto container relative z-10'>
            <div className='flex items-center gap-5 shadow-2xl border mx-[15%] py-9 rounded mt-[-100px] bg-white'>
                <div className='w-1/3 ml-3'>
                    <h2 className='text-2xl mb-3'>Top Categories</h2>
                    <p>There are many variations of category</p>
                    <button className='btn btn-outline mt-3 rounded-none'>See all</button>
                </div>
                <div className='flex gap-4 justify-center w-2/3'>
                    <Link to='' className='text-3xl border p-10 bg-gray-300' ><BiChair /></Link>
                    <Link to='' className='text-3xl border p-10 bg-gray-300'><GiTable /></Link>
                    <Link to='' className='text-3xl border p-10 bg-gray-300'><GiSofa /></Link>
                    <Link to='' className='text-3xl border p-10 bg-gray-300'><TbArmchair2 /></Link>
                </div>
            </div>
        </div>
    );
};

export default TopCategories;