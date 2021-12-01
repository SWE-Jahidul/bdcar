import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import "./ShowReviews.css";
const ShowReviews = () => {
  const [order, setOrder] = useState();
  useEffect(() => {
    fetch("https://shrouded-harbor-84354.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  return (
    <div className="container m-3">
      <div className="row">
        {order?.map((pd) => {
          const { rating, sDescription, name } = pd;
          return (
            <div className="col-lg-4 col-md-4 col-12 gy-3">
              <div class="card border-0 text-center">
                <div
                  class="card-body  "
                  style={{
                    backgroundColor: "#1C1C1C",
                  }}
                >
                  <h4>
                    <Rating
                      initialRating={rating}
                      emptySymbol="far fa-star text-warning "
                      fullSymbol="fas fa-star text-warning "
                      readonly
                    />
                  </h4>

                  <p class="card-text text-white text-center">{name}</p>

                  <div>
                    <p className="text-center text-white "> {sDescription} </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowReviews;
