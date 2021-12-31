import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import emailjs from "emailjs-com";

import { init } from "emailjs-com";
init("user_SX8IirbPARrHcXKCQj3tF");

const Contact = () => {
  function sendemail(e) {
    console.log("clicked");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3x01tuk",
        "template_xunppry",
        e.target,
        "user_SX8IirbPARrHcXKCQj3tF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="container py-5">
        <h3
          style={{
            color: "#EF5E24",
          }}
        >
          Get In Touch
        </h3>
        <div className="text-white">
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi.
        </div>

        <div className="row py-5">
          <div className="col-lg-5 col-md-5 col-12">
            <div className="d-flex justify-content-around align-items-center">
              <div>
                <i
                  style={{
                    color: "#EF5E24",
                  }}
                  class="fas fa-map-marked fa-2x"
                ></i>
              </div>
              <div>
                <h5 className="text-white">HQ Address</h5>
                <p className="text-white">
                  9868 Forest Avenue Pompano Beach, FL 33060
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-around align-items-center">
              <div>
                <i
                  style={{
                    color: "#EF5E24",
                  }}
                  class="fas fa-phone fa-2x"
                ></i>
              </div>
              <div>
                <h5 className="text-white">Toll-Free No.</h5>
                <p className="text-white">
                  1800 123 18000 , 1800 123 18000 ,1800 123 18000
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-around align-items-center">
              <div>
                <i
                  style={{
                    color: "#EF5E24",
                  }}
                  class="fas fa-fax fa-2x"
                ></i>
              </div>

              <div>
                <h5 className="text-white">Fax</h5>
                <p className="text-white">
                  1800 123 1800,1800 123 1800,1800 123 18001{" "}
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-around align-items-center">
              <div>
                <i
                  style={{
                    color: "#EF5E24",
                  }}
                  class="fas fa-envelope fa-2x"
                ></i>
              </div>

              <div>
                <h5 className="text-white">Fax</h5>
                <p className="text-white">
                  Programmerjahid1@gmail.com bdcar@gmail.com{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12">
            <form onSubmit={sendemail}>
              <div class="form-group">
                <textarea
                  class="form-control"
                  placeholder="Enter Messages"
                  //  onChange={handelMessages}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>

                <div class="row my-3">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      //  onChange={hadelname}
                      placeholder="Enter Name "
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                        //  onChange={handelemail}
                      placeholder="Enter Email"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  className="my-3 form-control"
                  //   onChange={handelSubject}
                  placeholder="Enter Subject"
                />
                <div className="getintouchtitle py-2">
                  <button
                    type="submit"
                    // onChange={handelsentdata}
                    class="btn  btn-lg w-25 text-white"
                    style={{
                      backgroundColor: "#EF5E24",
                    }}
                  >
                    SEND
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
