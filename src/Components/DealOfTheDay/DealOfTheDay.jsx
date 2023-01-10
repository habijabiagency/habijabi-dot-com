import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "../Rating/Rating";
import Countdown from "react-countdown";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./DealOfTheDay.css";

// import required modules
import { Pagination } from "swiper";
const DealOfTheDay = () => {

  const date = new Date("2023-01-11T01:02:03");
  return (
    <div className="container mx-auto mt-4">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="flex w-full product-item ">
            <div className="w-[40%] flex flex-col items-center justify-conte justify-center px-4 py-2 caption">
              <div className="text-[22px] title font-semibold">
                Deals of the day
              </div>
              <div className="prices mt-6">
                <span className="text-red-500 text-xl">$8450.00</span>{" "}
                <span className="line-through text-sm">$120.00</span>
              </div>
              <h4 className="mt-4 text-xl">
                Apple Cinema 30-inch HD Flat-Panel Display
              </h4>
              <div className="mt-4">
                <Rating value={2.5} />
              </div>
              <div className="text-[12px] flex w-full justify-between mt-4">
                <div>
                  Solid: <span>34</span>
                </div>
                <div>
                  Available: <span>243</span>
                </div>
              </div>
              <progress
                className="progress progress-error w-full"
                value="70"
                max="100"
              ></progress>
              <div className="mt-4 text-[14px]">Hurry up! Offer ends in:</div>

              <Countdown
                date={date}
                intervalDelay={0}
                precision={3}
                renderer={(props) => (
                  <div className="rounded-full border-2 border-red-500 mt-4 grid grid-flow-col gap-5 text-center auto-cols-max text-sm px-4 py-2">
                    <div className="flex flex-col">
                      <span className="countdown-timer font-mono text-2xl">
                        <span className="countdown-number">{props.days}</span>
                      </span>
                      days
                    </div>
                    <div className="flex flex-col">
                      <span className="countdown-timer font-mono text-2xl">
                        <span className="countdown-number">{props.hours}</span>
                      </span>
                      hour
                    </div>
                    <div className="flex flex-col">
                      <span className="countdown-timer font-mono text-2xl">
                        <span className="countdown-number">
                          {props.minutes}
                        </span>
                      </span>
                      minute
                    </div>
                    <div className="flex flex-col">
                      <span className="countdown-timer font-mono text-2xl">
                        <span className="countdown-number">
                          {props.seconds}
                        </span>
                      </span>
                      second
                    </div>
                  </div>
                )}
              />
            </div>
            <div className="w-[51%] image">
              <img src="https://placeimg.com/400/225/arch" alt="" />
            </div>
            <div className=" px-1 w-[9%] flex flex-col gallery-thumbs">
              <div className="border border-2 border-gray-300 hover:border-red-300">
                <img src="https://placeimg.com/400/225/arch" alt="" />
              </div>
              <div className="mt-1 border border-2 border-gray-300 hover:border-red-300">
                <img src="https://placeimg.com/400/225/arch" alt="" />
              </div>
              <div className="mt-1 border border-2 border-gray-300 hover:border-red-300">
                <img src="https://placeimg.com/400/225/arch" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DealOfTheDay;
