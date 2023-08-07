import React from "react";

export default function PlansandPricing() {
  return (
    <>
      {/* start main paragraph */}
      <div className="row align-items-center  plans-section">
        <div className="col ms-3 ms-md-5">
          <h3 className="text-white ">Plans&Pricing</h3>
          <h1 className="text-warning display-6">
            Choose your Package and Start Now!
          </h1>
          <p className="text-white display-2">Time to Change Your body</p>
        </div>
      </div>
      {/* end main paragraph */}

      {/* start Plansand pricing-pics  */}
      <div className="container planingpics">
        <div className="row planing-pics align-items-center justify-content-center">
          <div class="col-5 blog">
            <div class="title-box">
              <h3 className="text-warning border rounded p-1">
                Work Out Package
              </h3>
              <hr />
              <div class="intro"></div>
            </div>
            <div class="info">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </span>
            </div>
            <div class="footer-my">
              <div class="icon-holder">
                <span>
                  <i class="fa fa-comment-o"></i>
                  <span>12</span>
                  <space></space>
                  <i class="fa fa-calendar"></i>
                  <span>03.12.2015</span>
                </span>
              </div>
            </div>

            <div class="color-overlay"></div>
          </div>
          <div class="blog-2">
            <div class="title-box-2">
              <h3>SPRING FEVER</h3>
              <hr />
              <div class="intro-2"></div>
            </div>
            <div class="info-2">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </span>
            </div>
            <div class="footer-my-2">
              <div class="icon-holder-2">
                <span>
                  <i class="fa fa-comment-o"></i>
                  <span>12</span>
                  <space></space>
                  <i class="fa fa-calendar"></i>
                  <span>03.12.2015</span>
                </span>
              </div>
            </div>

            <div class="color-overlay-2"></div>
          </div>
        </div>
      </div>
      {/* end feedback-pics  */}
    </>
  );
}
