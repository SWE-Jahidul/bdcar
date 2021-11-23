import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-harbor-84354.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container py-5">
      <div className="row gy-5">
        <h3
          className=" text-center"
          style={{
            color: "#EF5E24",
          }}
        >
          {" "}
          Products{" "}
        </h3>

        {products.slice(0, 6).map((pd) => (
          <div className="col-md-4">
            <div class="card" style={{
            backgroundColor:'#1C1C1C'
          }}>
              <img src={pd.thabnil} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-white">{pd.title}</h5>
                <div>
                  <span className="text-white"> Price </span> <span className="text-white"> {pd.price}</span>
                </div>

                <div>
                  <span className="text-white"> Location </span> <span className="text-white"> {pd.discription} </span>
                </div>
              </div>
              <div class="card-footer">
                <Link to={`/singleproduct/${pd._id}`}>
                  <button
                    style={{
                      backgroundColor: "#EF5E24",
                      color: "white !important",
                      border: 0,
                    }}
                    className="button-read-more text-white"
                    data-aos="fade-right"
                    data-aos-delay="250"
                  >
                    BUY CAR
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
