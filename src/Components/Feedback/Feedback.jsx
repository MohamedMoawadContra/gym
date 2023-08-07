import React from "react";
import imgawy from "../imgs/3.jpg";
import feed1 from "../imgs/f-1.jpg";
import feed2 from "../imgs/f-2.jpg";
import feed3 from "../imgs/f-3.jpg";
import feed4 from "../imgs/f-4.jpg";

export default function Feedback() {
  return (
    <>
      {/* start main paragraph */}
      <div className="row align-items-center feedback-section">
        <div className="col ms-3 ms-md-5">
          <h3 className="text-white ">feedback</h3>
          <h1 className="text-warning display-6">Some of our Army feedback</h1>
          <p className="text-white display-2">your motivation push us</p>
        </div>
      </div>
      {/* end main paragraph */}

      {/* start feedback-pics  */}
      <div className="container">
        <div className="row transformation-pics align-items-center justify-content-center">
          <div className="col-11 mt-5 mt-md-5 mb-3 mb-md-0   col-md-5 ">
            <img className="imgawy" src={feed1} alt="" />
          </div>
          <div className="col-11 mb-3 mb-md-0   col-md-5 ">
            <img className="imgawy" src={feed2} alt="" />
          </div>
          <div className="col-11 mb-3 mb-md-0   col-md-5 ">
            <img className="imgawy" src={feed3} alt="" />
          </div>
          <div className="col-11 mb-5 mb-md-0   col-md-5">
            <img className="imgawy" src={feed4} alt="" />
          </div>
        </div>
      </div>
      {/* end feedback-pics  */}
    </>
  );
}
