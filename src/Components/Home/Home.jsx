import React from "react";
import img from "../imgs/7elwa.jpg";
import img2 from "../imgs/7elwa2.jpg";
import img3 from "../imgs/7.jpg";
import { Carousel } from "react-bootstrap";
import img4 from "../imgs/Home.jpg";
import img1 from "../imgs/2.jpg";
import image2 from "../imgs/1.jpg";

export default function Home() {
  return (
    <>
      {/* start home carousel */}
      <div className="homeCarousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="imgawy d-block w-100 home-caro"
              src={img}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3
                className="text-uppercase fw-bold h1  "
                style={{ letterSpacing: "5px" }}
              >
                Welcome to the army
              </h3>
              <p
                className="text-uppercase fw-bold h2 text-bg-primary"
                style={{ letterSpacing: "5px" }}
              >
                Great results always require the strongest will
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgawy d-block w-100 home-caro"
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3
                className="text-uppercase fw-bold h1"
                style={{ letterSpacing: "5px" }}
              >
                Welcome to the army
              </h3>
              <p
                className="text-uppercase fw-bold h2 text-bg-primary"
                style={{ letterSpacing: "5px" }}
              >
                Great results always require the strongest will
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgawy d-block w-100 home-caro"
              src={img3}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3
                className="text-uppercase fw-bold h1  "
                style={{ letterSpacing: "5px" }}
              >
                Welcome to the army
              </h3>
              <p
                className="text-uppercase fw-bold h2 text-bg-primary"
                style={{ letterSpacing: "5px" }}
              >
                Great results always require the strongest will
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* end home carousel */}

      {/* start our army */}

      <div className="our-army container text-center mb-sm-5 mb-md-2 ">
        <h1 className="text-center text-capitalize text-warning border border-3 w-50 ms-auto me-auto rounded army-heading">
          join our army
        </h1>
        <div
          className="container align-items-center h-100"
          style={{ height: "20vh" }}
        >
          <div className="row align-items-center justify-content-center h-100 army-icons">
            <div className=" scale col-6 mb-5 col-md-3 ">
              <i className="fa-brands fa-facebook fa-3x   text-primary faceb"></i>
            </div>
            <div className="col-6 mb-5 col-md-3 scale">
              <i className="fa-brands fa-youtube fa-3x  text-danger yt"></i>
            </div>
            <div className="col-6 mb-5 col-md-3 scale">
              <i className="fa-brands fa-instagram fa-3x  text-danger inst"></i>
            </div>
            <div className="col-6 mb-5 col-md-3 scale">
              <i className="fa-brands fa-tiktok  fa-3x tk"></i>
            </div>
          </div>
        </div>
      </div>
      {/* end our army */}

      {/* start story section */}

      <div className="story mt-5">
        <div className=" container ">
          <div className="row align-items-center justify-content-between iamHere">
            <div className="col-12 col-md-5">
              <h2 className="h1 fw-bold text-warning motivation-1 mt-5 mt-sm-5">
                who am i?
              </h2>
              <p className="text-white motivation">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis at magni doloribus harum neque esse doloremque id,
                asperiores vitae dolore sit reiciendis dolor laboriosam
                molestiae magnam sapiente. Voluptate, aperiam consectetur .
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores id voluptate quos cupiditate accusantium minus
                voluptatibus laborum est reiciendis mollitia deserunt ex
                excepturi a, atque ipsa iusto? Dolores, ipsa perspiciatis.
              </p>
              <div className="btn btn-outline-warning text-white ">
                learn more
              </div>
            </div>
            <div className=" col-md-7 col-lg-5 col-sm-7 col-11 storyImg mt-4 h-100 ">
              <img
                className=" w-100 p-3 border border-primary-subtle rounded  "
                src={img4}
                alt="not found"
              />
            </div>
          </div>
        </div>
      </div>
      {/* end story section */}

      <div className="trans">
        <div className="container text-center">
          <div className="col mt-5">
            <div className="col">
              <h1 className="text-center text-capitalize text-warning  container w-50 ms-auto me-auto  story-header">
                Transformation
              </h1>
            </div>
            <div className="col ">
              <h2
                className="mb-3 mt-3 btn btn-outline-warning story-view-more-1"
                style={{ marginBottom: "50px" }}
              >
                view more
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* start trans carousel */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide myback mt-5 container trans-c"
      >
        <div class="carousel-indicators align-items-center trans-x">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* start our plans */}
      <h1 className="text-center text-capitalize text-warning border border-3 w-50 ms-auto me-auto rounded mb-5 plans-heading">
        our Plan
      </h1>
      <div className="ourPlans ">
        <div className="container h-100">
          <div className="row justify-content-around align-items-center h-100">
            <div className="col-sm-6 col-lg-4">
              <div class=" card">
                <img
                  src={img1}
                  class="imgawy card-img-top plaaans-card"
                  style={{ height: "300px" }}
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-center fw-bold  p-1 h1">
                    Workout Plan
                  </h5>
                  <p class="card-text text-center">
                    This is a wider card with supporting text below as a natural
                  </p>
                  <p class="card-text text-center">
                    <div className="btn btn-warning">view more</div>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div class=" card">
                <img
                  src={image2}
                  class="imgawy card-img-top  "
                  style={{ height: "300px" }}
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-center fw-bold  p-1 h1">
                    nutrition plan
                  </h5>
                  <p class="card-text text-center">
                    This is a wider card with supporting text below as a natural
                  </p>
                  <p class="card-text text-center">
                    <div className="btn btn-warning">view more</div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end our plans section */}

      {/* start communication section */}
      <h1 className="text-center text-capitalize text-warning border border-3 w-50 ms-auto me-auto rounded mt-5 com-heading">
        Contact with us
      </h1>

      <div
        className="communication "
        style={{
          height: "80vh",
          backgroundColor: " rgb(5, 36, 37)",
          marginBottom: "100px",
        }}
      >
        <div className="container h-100 ">
          <div className="row  justify-content-around mt-5 align-items-center h-100">
            <div className="col-md-4 col-sm-12">
              <p className=" mb-md-2 mb-lg-5 h1 text-white p-com">
                Leave your message and we will contact with you within 24 hours
              </p>
            </div>
            <div className="col-md-4 col-sm-12 form-com">
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label  text-white"
                >
                  Full name
                </label>
                <input
                  type="email"
                  class="form-control active"
                  id="exampleFormControlInput1"
                  placeholder="your name"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control active"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label text-white"
                >
                  phone number{" "}
                </label>
                <input
                  type="email"
                  class="form-control active"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label text-white"
                >
                  Leave your Message here
                </label>
                <textarea
                  class="form-control active"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="your message"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end communication section */}

      {/* end home */}
    </>
  );
}
