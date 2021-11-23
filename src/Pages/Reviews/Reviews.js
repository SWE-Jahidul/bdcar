import React from "react";

const Reviews = () => {
  return (
    <div className="container">
      <h3 className="text-center"
        style={{
          color: "#EF5E24",
        }}
      >
       
        Customer Says
      </h3>

      <div className="row">
        <div className="col-lg-4 col-md-4 col-12">
          <div class="card text-center">
            <div class="card-body">
              <h4>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </h4>

              <p class="card-text text-center">Customer Support</p>

              <div>
                <p className="text-center">
                  {" "}
                  Customar says About your services{" "}
                </p>
              </div>

              <div>
                <img src="" alt="profile-pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
