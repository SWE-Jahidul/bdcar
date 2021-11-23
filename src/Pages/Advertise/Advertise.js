import React from "react";

import img1 from "../../images/advertise1.jpg";
import img2 from "../../images/advertise2.jpg";
const Advertise = () => {
  return (
    <div className="container">
      <div className="row gx-5 py-5">
        <div className="col-lg-6 col-md-6 col-12">
          <img src={img1} className="img-fluid" />
        </div>

        <div className="col-lg-6 col-md-6 col-12">
          <img src={img2} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Advertise;
