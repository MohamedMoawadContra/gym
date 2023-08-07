import React from "react";
import img from "./327882150_1335073137336403_7941703851104913916_n.jpg";
import logo1 from "../imgs/logo.jpg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <html>
        <body>
          <footer class="footer w-100  ">
            <div class="waves">
              <div class="wave" id="wave1"></div>
              <div class="wave" id="wave2"></div>
              <div class="wave" id="wave3"></div>
              <div class="wave" id="wave4"></div>
            </div>
            <ul class="social-icon container ">
              <div className="footer-icons justify-content-center row">
                <li class="social-icon__item col-3 ">
                  <i className="fa-brands fa-facebook fa-2x  text-primary"></i>
                </li>
                <li class="social-icon__item col-3">
                  <i className="fa-brands fa-youtube fa-2x  text-danger"></i>
                </li>
                <li class="social-icon__item col-3">
                  <i className="fa-brands fa-instagram fa-2x  text-danger"></i>
                </li>
                <li class="social-icon__item col-3">
                  <i className="fa-brands fa-tiktok  fa-2x"></i>
                </li>
              </div>
            </ul>
            <ul class="menu container justify-content-center col-1  align-items-center footer-ul">
              <li class="menu__item ">
                <Link className="menu__link" to="">
                  Home
                </Link>
              </li>
              <li class="menu__item ">
                <Link className="menu__link" to="aboutus">
                  about
                </Link>
              </li>
              <li class="menu__item ">
                {" "}
                <Link className="menu__link" to="PlansandPricing">
                  Plans&Pricing
                </Link>
              </li>
              <li class="menu__item">
                {" "}
                <Link className="menu__link" to="contact">
                  Contact{" "}
                </Link>
              </li>
              <li class="menu__item">
                {" "}
                <Link className="menu__link" to="">
                  whatApp
                </Link>
              </li>
            </ul>
            <p>
              &copy;2023 All Rights Reserved to <br />
              <Link
                to="https://www.facebook.com/mohamed.moawad.942"
                className="btn btn-outline-warning container mt-3 mb-3"
              >
                mohamed moawad
              </Link>
            </p>
          </footer>
          <script
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          ></script>
        </body>
      </html>
    </>
  );
}
