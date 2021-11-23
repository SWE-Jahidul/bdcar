import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer ">
        <section className="container ">
          <div className="row pt-5">
            <div className="col-lg-3 con1">
              <h5
                style={{
                  color: "#EF5E24",
                }}
              >
                {" "}
                Latest Tweets
              </h5>
              <hr
                className="w-25 "
                style={{
                  height: 4,
                  color: "white",
                }}
              />

              <p>
                Art Gallery - TZ Portfolio+ Gallery by templaza #joomla
                https://t.co/rxJuQV5meq
              </p>

              <p>
                Art Gallery - TZ Portfolio+ Gallery by templaza #joomla
                https://t.co/rxJuQV5meq
              </p>
            </div>
            <div className="col-lg-3 con1">
              <h5
                style={{
                  color: "#EF5E24",
                }}
              >
                Overview{" "}
              </h5>
              <hr
                className="w-25"
                style={{
                  height: 4,
                  color: "white",
                }}
              />

              <p>About Us</p>
              <p> Advertise with us </p>
              <p> Contact Us</p>
              <p> FAQs</p>
            </div>
            <div className="col-lg-3 con1">
              <h5
                style={{
                  color: "#EF5E24",
                }}
              >
                {" "}
                Other Pages
              </h5>
              <hr
                className="w-25"
                style={{
                  height: 4,
                  color: "white",
                }}
              />

              <p> Careers </p>
              <p> Customer Care </p>
              <p> Tearms & Condition </p>
              <p> Privecy Policy </p>
            </div>
            <div className="col-lg-3 con1 ">
              <h5
                style={{
                  color: "#EF5E24",
                }}
              >
                {" "}
                Contact Us
              </h5>
              <hr
                className="w-25"
                style={{
                  height: 4,
                  color: "white",
                }}
              />

              <p> 76/A, Green Lane, Dhanmondi, NYC demomail89@gmail.com </p>
              <p> 01798561626 </p>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="pt-3 pb-0">
              <div className="d-flex justify-content-center">
                <div>
                  <span className="d-flex text-dark py-3 ms-auto ">
                    <div className="social-icons-f">
                      <a href="" target="_blank">
                        <span className="icon-users rounded-circle  p-3">
                          <i className="fab fa-facebook-f"></i>
                        </span>
                      </a>
                    </div>
                    <div className="social-icons-f ms-3 ">
                      <a href="" target="_blank">
                        <span className="icon-users rounded-circle  p-3">
                          <i className="fab fa-twitter"></i>
                        </span>
                      </a>
                    </div>
                    <div className="social-icons-f ms-3 ">
                      <a href="" target="_blank">
                        <span className="icon-users rounded-circle  p-3">
                          <i className="fab fa-linkedin-in"></i>
                        </span>
                      </a>
                    </div>
                    <div className="social-icons-f ms-3 ">
                      <a href="" target="_blank">
                        <span className="icon-users rounded-circle  p-3">
                          <i className="fab fa-instagram"></i>
                        </span>
                      </a>
                    </div>
                  </span>
                </div>
              </div>
              <p className="text-center text-white ">
                Copyright © 2020 AmarSoft All Rights Reserved by j Islam .
              </p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
