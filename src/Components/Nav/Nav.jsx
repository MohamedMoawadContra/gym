import React from "react";
import { Link } from "react-router-dom";
import img from "../imgs/Logo final.PNG";

export default function Nav() {
  return (
    <>
      <div className="myNav">
        <div className="container">
          <nav id="dom" className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <Link to="">
                <img className="logo me-5" src={img} alt="" />
              </Link>
              <button
                className="navbar-toggler bg-warning text-dark fw-bold justify-content-start-lg "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon color-dark fw-bold"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link
                    className="nav-link linksDecoration   white text-white btn btn-warning"
                    aria-current="page"
                    to=""
                  >
                    Home
                  </Link>
                  <Link
                    className="nav-link linksDecoration  mx-2 white text-warning text-white btn btn-warning"
                    to="Transformations"
                  >
                    Transformations
                  </Link>
                  <Link
                    className="nav-link linksDecoration mx-2 white text-white btn btn-warning "
                    to="Feedback"
                  >
                    Feedback
                  </Link>
                  <Link
                    className="nav-link linksDecoration mx-2 white text-white btn btn-warning "
                    to="PlansandPricing"
                  >
                    Plan & Pricing
                  </Link>
                  <Link
                    className="nav-link linksDecoration mx-2 white text-white btn btn-warning"
                    to="aboutus"
                  >
                    About Us
                  </Link>

                  <Link
                    className="nav-link linksDecoration  mx-2 white text-white text-warning btn btn-warning"
                    to="https://wa.me/201092108072"
                    target="_blank"
                  >
                    <i className="fa-brands fa-whatsapp green m-1"></i>
                    WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Link
        to="https://wa.me/201092108072"
        className="btn btn-warning joinus  p-3"
        target="_blank"
      >
        Join Us
      </Link>
    </>
  );
}

// <Link to="">Home</Link>
//       <Link to="Transformations">Transformations</Link>
//       <Link to="Feedback">Feedback</Link>
//       <Link to="PlansandPricing">Transformation Plan & Prices</Link>
//       <Link to="aboutus">About Us</Link>
//       <Link to="contact">Contact Us</Link>
