import React from "react";
import Slider from "../widgets/Slider/Slider.js"
import "./HomeSlider.css";

const HomeSlider = () => {
  const imageurl =
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80";
  const items = [
    {
      url: imageurl,
      title: {
        text1: "A days left",
        text2: "Hot deals, limited stock",
        text3: "buy now for 10%"
      }
    },
    {
      url: imageurl,
      title: {
        text1: "A days left",
        text2: "Hot deals, limited stock",
        text3: "buy now for 10%"
      }
    },
    {
      url: imageurl,
      title: {
        text1: "A days left",
        text2: "Hot deals, limited stock",
        text3: "buy now for 10%"
      }
    },
  ]
  return (
    <div className="mt-4 mx-auto container">
      <div className=" display-slider font-semibold  text-white">
        <div className="slider-section">
          <Slider items={items}></Slider>
        </div>
        <div className="best-slider-item">
          <img src={imageurl} className="rounded-box" alt="" />
          <div className="best-slider-item-text">
            <div className="text-s[16px] md:text-[20px]">Home Decor</div>
            <div className="text-[30px] mt-2">
              The Best clock creative Furniture
            </div>
            <button className="btn btn-primary mb-5 mt-5 text-white bg-red-500 hover:bg-red-700 border-none">
              Shop now
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeSlider;
