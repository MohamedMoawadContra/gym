import React from "react";
import imgAbout from "../imgs/3.jpg";

export default function AboutUs() {
  return (
    <>
      {/* start main paragraph */}
      <div className="row align-items-center aboutUs-section">
        <div className="col ms-3 ms-md-5">
          <h3 className="text-white ">Plans&Pricing</h3>
          <h1 className="text-warning display-6">
            Choose your Package and Start Now!
          </h1>
          <p className="text-white display-2">Time to Change Your body</p>
        </div>
      </div>
      {/* end main paragraph */}

      {/* start feedback-pics  */}
      <div className="container mt-5">
        <div className="row aboutUs-pics align-items-center justify-content-between mb-5">
          <div className="col-11   col-md-6 ">
            {" "}
            <h1
              className="mt-5 text-warning"
              style={{ borderBottom: "3px solid white", width: "200px" }}
            >
              About Me
            </h1>
            Mohamed fouad is a certified fitness trainer and nutritionist who
            helps people change their mindsets and adopt healthier lifestyles.
            Before starting his coaching business, Mohamed fouad spent five
            years studying civil engineering . After graduating in 2019, he
            realized that his passion is in developing mindsets and bodies. Now
            with an experience of 8 years in the fitness field, Mohamed fouad is
            holding several certificates in this field including national
            academy of sports medicine(NASM) & Certificated Personal Trainer
            from American council education(ACE) professionals (EREPS). Mohamed
            fouad started (viking Army 4fit)in 2021 to increase people's
            awareness about healthy lifestyles. Now thousands of followers
            around the world are benefiting from his online content.
            Additionally, his personally customized fitness and nutrition
            programs that are based on his knowledge and experience together
            help his clients achieve their targets by following his flexible
            plans
          </div>
          <div className="col-11  col-md-5 ">
            <img
              style={{ border: "3px solid gray", borderRadius: "5px" }}
              className="imgawy mb-5 "
              src={imgAbout}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* end feedback-pics  */}
    </>
  );
}
