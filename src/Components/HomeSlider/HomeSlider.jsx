import React from "react";
import "./HomeSlider.css";

const HomeSlider = () => {
  const imageurl = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
  return (
    <div className="display-slider font-semibold  text-white">
      <div className="slider-section">
        <img src={imageurl} className="rounded-box" />
        <div className="slider-section-text">
          <div className="text-[20px]">One Day Only</div>
          <div className="text-[30px] mt-1">The egg chair</div>
          <div className="text-[20px] mt-3">10% of selected Living Room</div>
          <button className="btn btn-primary mt-5 text-white bg-red-500 hover:bg-red-700 border-none">Read more</button>
        </div>
      </div>
      <div className="best-slider-item">
        <img src={imageurl} className="rounded-box" />
        <div className="best-slider-item-text">
          <div className="text-s[16px] md:text-[20px]">Home Decor</div>
          <div className="text-[30px] mt-2">The Best clock creative Furniture</div>
          <button className="btn btn-primary mb-5 mt-5 text-white bg-red-500 hover:bg-red-700 border-none">Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
