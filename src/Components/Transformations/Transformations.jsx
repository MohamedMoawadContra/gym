import React from "react";
import imgawy from "../imgs/1.jpg";
import imgOne from "../imgs/t-1.jpg";
import imgTwo from "../imgs/t-2.jpg";
import imgThree from "../imgs/t-3.jpg";
import imgFour from "../imgs/t-4.jpg";
import imgFive from "../imgs/t-5.jpg";
import imgsix from "../imgs/t-6.jpg";
import imgseven from "../imgs/t-7.jpg";
import imgeight from "../imgs/t-8.jpg";
import imgnine from "../imgs/t-9.jpg";
import imgten from "../imgs/t-10.jpg";
import imgeleven from "../imgs/t-11.jpg";
import imgtwelve from "../imgs/t-12.jpg";
import imgethirteen from "../imgs/t-13.jpg";
import imgefourten from "../imgs/t-14.jpg";

export default function Transformations() {
  return (
    <>
      {/* start main paragraph */}
      <div className="row align-items-center transformation-section">
        <div className="col ms-3 ms-md-5">
          <h3 className="text-white ">Transformations</h3>
          <h1 className="text-warning display-6">
            Some of our Army transformation
          </h1>
          <p className="text-white display-6">
            Here you can change your lifeStyle <br /> and shape of your body
          </p>
        </div>
      </div>
      {/* start main paragraph */}

      {/* start transformation pics */}

      <div className="container mt-5 mt-md-0">
        <div className="row transformation-pics align-items-center justify-content-center">
          <div className="col-11  col-md-3 mb-5 mb-md-0 ">
            <img className="imgawy" src={imgOne} alt="" />
          </div>
          <div className="col-11  col-md-3  mb-5 mb-md-0">
            <img className="imgawy" src={imgTwo} alt="" />
          </div>
          <div className="col-11 col-md-3  mb-5 mb-md-0">
            <img className="imgawy" src={imgThree} alt="" />
          </div>
          <div className="col-11 col-md-3 mb-5 mb-md-0">
            <img className="imgawy" src={imgFour} alt="" />
          </div>
          <div className="col-11 col-md-3 mb-5 mb-md-0">
            <img className="imgawy" src={imgFive} alt="" />
          </div>
          <div className="col-11 col-md-3 mb-5 mb-md-0">
            <img className="imgawy" src={imgsix} alt="" />
          </div>
          <div className="col-11 col-md-3 mb-5 mb-md-0">
            <img className="imgawy" src={imgseven} alt="" />
          </div>
          <div className="col-11 col-md-3 mb-5 mb-md-0">
            <img className="imgawy" src={imgeight} alt="" />
          </div>
          <div className="col-11 col-md-3 mb-5 mb-md-0">
            <img className="imgawy" src={imgnine} alt="" />
          </div>
          <div className="col-11 col-md-3 mb-5 mb-md-0">
            <img className="imgawy" src={imgten} alt="" />
          </div>
          <div className="col-11 col-md-3 mb-5 mb-md-0">
            <img className="imgawy" src={imgeleven} alt="" />
          </div>
          <div className="col-11 col-md-3 mb-5 mb-md-0">
            <img className="imgawy" src={imgtwelve} alt="" />
          </div>
          <div className="col-11 col-md-3 mb-5 mb-md-0">
            <img className="imgawy" src={imgethirteen} alt="" />
          </div>
          <div className="col-11 col-md-3 mb-5 mb-md-0">
            <img className="imgawy" src={imgefourten} alt="" />
          </div>
        </div>
      </div>

      {/* end transformation pics */}
    </>
  );
}
