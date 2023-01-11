import React, { useState } from 'react';
import './ExclusiveProducts.css'

const ExclusiveProducts = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'New Arrival',
            title: 'Title 1',
            content: "$39.00"


        },
        {
            id: 2,
            tabTitle: 'Best Sellers',
            title: 'Title 2',
            content: "$39.00"
        },
        {
            id: 3,
            tabTitle: 'Featured',
            title: 'Title 3',
            content: "$39.00"
        },
        {
            id: 4,
            tabTitle: 'Special Offer',
            title: 'Title 4',
            content: "$39.00"
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-2xl font-bold my-4'>Exclusive Products</h1>
            <div className='flex justify-center items-center'>
                {tabs.map((tab, i) =>
                    <button className='tab' key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">{tab.title}</h2>
                                <p className='text-red-500'>{tab.content}</p>
                            </div>
                        </div>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExclusiveProducts;