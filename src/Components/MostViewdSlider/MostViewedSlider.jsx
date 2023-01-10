import React, { useEffect, useRef, useState } from 'react';
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import './MostViewedSlider.css'

const MostViewedSlider = () => {
    const [slideLength, setSlideLength] = useState(null)
    const [currentSlide, setCurrentSlide] = useState(1)


    const items = [
        {
            title: "Printed Chiffon",
            viewed: "532 viewed",
            img: "https://images.othoba.com/images/thumbs/0350769_proton-m-earphone-neck-band-p5-blue.jpeg"
        },
        {
            title: "Printed Chiffon",
            viewed: "532 viewed",
            img: "https://images.othoba.com/images/thumbs/0350769_proton-m-earphone-neck-band-p5-blue.jpeg"
        },
        {
            title: "Printed Chiffon",
            viewed: "532 viewed",
            img: "https://images.othoba.com/images/thumbs/0350769_proton-m-earphone-neck-band-p5-blue.jpeg"
        },
        {
            title: "Printed Chiffon",
            viewed: "532 viewed",
            img: "https://images.othoba.com/images/thumbs/0350769_proton-m-earphone-neck-band-p5-blue.jpeg"
        },
        {
            title: "Printed Chiffon",
            viewed: "532 viewed",
            img: "https://images.othoba.com/images/thumbs/0350769_proton-m-earphone-neck-band-p5-blue.jpeg"
        },
        {
            title: "Printed Chiffon",
            viewed: "532 viewed",
            img: "https://images.othoba.com/images/thumbs/0350769_proton-m-earphone-neck-band-p5-blue.jpeg"
        },
        {
            title: "Printed Chiffon",
            viewed: "532 viewed",
            img: "https://images.othoba.com/images/thumbs/0350769_proton-m-earphone-neck-band-p5-blue.jpeg"
        },
        {
            title: "Colouring Chiffon",
            viewed: "532 viewed",
            img: "https://images.othoba.com/images/thumbs/0350769_proton-m-earphone-neck-band-p5-blue.jpeg"
        },
    ]


    useEffect(() => {
        if (items.length !== 0) {
            setSlideLength(items.length)
        }
    }, [items.length])
    console.log(slideLength);

    const slidingContainer = useRef(null)
    console.log(slidingContainer.current);

    function moveLeft() {
        if (currentSlide < items.length) {
            slidingContainer.current.style.transform = `translateX(-${200 * currentSlide - 200}px)`
            setCurrentSlide(currentSlide + 1)
        }
        // else {
        //     setCurrentSlide(items.length)
        //     slidingContainer.current.style.transform = `translateX(-${200 * currentSlide}px)`
        // }
    }

    function moveRight() {
        if (currentSlide > 1) {
            slidingContainer.current.style.transform = `translateX(${200 * currentSlide + 200}px)`
            setCurrentSlide(currentSlide - 1)
        }
        // else {
        //     setCurrentSlide(1)
        //     slidingContainer.current.style.transform = `translateX(${0 * currentSlide}px)`
        // }
    }

    return (
        <div className='container mx-auto flex my-3'>
            <div className='slide-images-navigation'>
                <h3 className='text-3xl font-bold text-center my-14'>Most Viewed</h3>
                <div className='flex items-center justify-center my-5'>
                    <button className='text-3xl hover:bg-slate-400' onClick={moveLeft}><BiLeftArrow /></button>
                    <button className='text-3xl hover:bg-slate-400' onClick={moveRight}><BiRightArrow /></button>
                </div>
            </div>
            <div className='slide-images-cards'>
                <div className='sliding-container' ref={slidingContainer}>
                    <div className='flex flex-nowrap'>
                        {
                            items.map((item, index) =>
                                <div key={index} className="card w-52 bg-base-100 shadow-xl">

                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{item.title}</h2>
                                        <p>{item.viewed}</p>
                                    </div>
                                    <figure className="px-10 pt-10">
                                        <img src={item.img} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostViewedSlider;