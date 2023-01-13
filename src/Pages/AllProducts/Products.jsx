import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillCartCheckFill } from 'react-icons/bs';

const Products = () => {
    const products = [
        {
            img: "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-01-228x228.jpg",
            title: "Apple MacBook Air 13.3-Inch 10th Gen Core i5-1.1GHz, 8GB RAM, 512GB SSD (MVH22) Space Gray 2020",
            description1: 'Intel Core i5 10th Gen (1.1GHz up to 3.5GHz) Processor',
            description2: '8GB LPDDR4X RAM',
            description3: '512GB SSD',
            description4: '13.3-inch (diagonal) Retina LED-backlit Display',
            price: '999.00'
        },
        {
            img: "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-01-228x228.jpg",
            title: "Apple MacBook Air 13.3-Inch 10th Gen Core i5-1.1GHz, 8GB RAM, 512GB SSD (MVH22) Space Gray 2020",
            description1: 'Intel Core i5 10th Gen (1.1GHz up to 3.5GHz) Processor',
            description2: '8GB LPDDR4X RAM',
            description3: '512GB SSD',
            description4: '13.3-inch (diagonal) Retina LED-backlit Display',
            price: '999.00'
        },
        {
            img: "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-01-228x228.jpg",
            title: "Apple MacBook Air 13.3-Inch 10th Gen Core i5-1.1GHz, 8GB RAM, 512GB SSD (MVH22) Space Gray 2020",
            description1: 'Intel Core i5 10th Gen (1.1GHz up to 3.5GHz) Processor',
            description2: '8GB LPDDR4X RAM',
            description3: '512GB SSD',
            description4: '13.3-inch (diagonal) Retina LED-backlit Display',
            price: '999.00'
        },
        {
            img: "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-01-228x228.jpg",
            title: "Apple MacBook Air 13.3-Inch 10th Gen Core i5-1.1GHz, 8GB RAM, 512GB SSD (MVH22) Space Gray 2020",
            description1: 'Intel Core i5 10th Gen (1.1GHz up to 3.5GHz) Processor',
            description2: '8GB LPDDR4X RAM',
            description3: '512GB SSD',
            description4: '13.3-inch (diagonal) Retina LED-backlit Display',
            price: '999.00'
        },
    ]
    return (
        <div>
            <div className='flex justify-between items-center bg-white mb-5 p-3'>
                <h2 className='text-2xl'>MackBook</h2>
                <div className='flex items-center gap-2'>
                    <h2>Show:</h2>
                    <select className="select bg-slate-200 rounded-none">
                        <option selected>20</option>
                        <option>24</option>
                        <option>48</option>
                        <option>75</option>
                        <option>90</option>
                    </select>
                    <h2>Sort By:</h2>
                    <select className="select bg-slate-200 rounded-none">
                        <option selected>Default</option>
                        <option>Price (Low to High)</option>
                        <option>Price (High to Low)</option>
                    </select>
                </div>

            </div>
            <div className='flex gap-2'>
                {
                    products.map((product, index) => <div key={index} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={product.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.title}</h2>
                            <ul className='list-disc'>
                                <li>{product.description1}</li>
                                <li>{product.description2}</li>
                                <li>{product.description3}</li>
                                <li>{product.description4}</li>
                            </ul>
                            <div className="divider"></div>
                            <h2 className='text-2xl text-red-500 text-center'>${product.price}</h2>
                            <div className="card-actions justify-center">
                                <button className="btn btn-outline btn-primary rounded-none w-full"><BsFillCartCheckFill /> Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;