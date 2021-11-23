import React from "react";

import img1 from "../../../images/NewMcLarenUltimateSeries-1280x720.jpg";
import img2 from "../../../images/photo-1492144534655-ae79c964c9d7.jpg";
import img3 from "../../../images/TR4wp3g5bUSPcwpeUiohUU.jpg";

import "./HomeBanner.css";
const HomeBanner = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100"
              style={{
                minHeight: "10%",
                maxHeight: 400,
              }}
              alt="..."
            />
            <div className="carousel-caption d-flex align-items-center">
              <div>
                <h1 data-aos="fade-down" data-aos-delay="200" style={{
                  color:'#EF5E24'
                }}>
                  {" "}
                  Find the Right Car for you
                </h1>

                <p
                  className="text-white fs-5"
                  data-aos="fade-up"
                  data-aos-delay="220"
                >
                  Slider Revolution is the highly acclaimed slide-based
                  displaying solution, thousands of businesses, theme developers
                  and everyday people use and love!
                </p>

                <div>
                  <button
                    style={{
                      backgroundColor:'#EF5E24'
                    }}
                    className="button-read-more"
                    data-aos="fade-right"
                    data-aos-delay="250"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              style={{
                minHeight: "10%",
                maxHeight: 400,
              }}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-flex align-items-center">
              <div>
                <h1 data-aos="fade-down" data-aos-delay="200" style={{
                  color:'#EF5E24'
                }} >
                  ENJOY&SHARE YOUR CAR
                </h1>
                <p
                  className="text-white fs-5"
                  data-aos="fade-up"
                  data-aos-delay="220"
                >
                  Slider Revolution is the highly acclaimed slide-based
                  displaying solution, thousands of businesses, theme developers
                  and everyday people use and love!
                </p>

                <div>
                  <button
                    style={{
                      backgroundColor:'#EF5E24'
                    }}
                    className="button-read-more"
                    data-aos="fade-right"
                    data-aos-delay="250"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              style={{
                minHeight: "10%",
                maxHeight: 400,
              }}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-flex align-items-center">
              <div>
                <h1 style={{
                  color:'#EF5E24'
                }}> Why Chose Us ?</h1>
                <p className="text-white fs-5">
                  Choose The Car Company for REPUTATION, the number one reason
                  you should choose The Car Company is our reputation and what
                  our customers say about us, with over 50% of our business
                  being repeat or referral we are clearly looking after our
                  clients and community
                </p>

                <div>
                  <button
                    className="button-read-more"
                    data-aos="fade-right"
                    data-aos-delay="250"
                    style={{
                      backgroundColor:'#EF5E24'
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
