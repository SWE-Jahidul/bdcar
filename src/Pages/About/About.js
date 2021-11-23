import React from "react";

import img1 from "../../images/car3.png";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
const About = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="container">
      <div className="row py-3">
        <div className="d-flex align-items-center">
          <div className="col-md-6">
            <h3  style ={{
                color:'#EF5E24'
              }}> About bD-car </h3>
            <p className="text-white">
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
              tempus, tellus eget condimentum rhoncus, sem quam semper libero,
              sit amet adipiscing sem neque sed ipsum.
            </p>

            <p className="text-white">
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
              tempus, tellus eget condimentum rhoncus, sem quam semper libero,
              sit amet adipiscing sem neque sed ipsum.
            </p>
          </div>

          <div className="col-md-6">
            <img className="img-fluid" src={img1} />
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default About;
