import React from "react";

import "../styles.css";

export default function SlideTitle({ title }) {
  return <div className="slide-title">
                <div className="text-[20px]">{title.text1}</div>
                <div className="text-[30px] mt-1">{title.text2}</div>
                <div className="text-[20px] mt-3">
                {title.text3}
                </div>
                <button className="btn btn-primary mt-5 text-white bg-red-500 hover:bg-red-700 border-none">
                  Read more
                </button>
  </div>;
}
