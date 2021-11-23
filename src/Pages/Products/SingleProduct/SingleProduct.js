import axios from "axios";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

import img1 from "../../../images/img4.jpg";
import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import useAuth from "../../../hooks/useAuth";

const SingleProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const { productId } = useParams();

  const { user } = useAuth();

  const [productDetails, setproductDetails] = useState([]);
  const [currentProductDetails, SetCurrentProductDetails] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-harbor-84354.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log("load data ", data);
        setproductDetails(data);
      });
  }, []);

  useEffect(() => {
    if (productDetails.length > 0) {
      const myproduct = productDetails.find(
        (productdts) => productdts._id == productId
      );

      SetCurrentProductDetails(myproduct);
      console.log("my event ", myproduct);
    }
  }, [productDetails]);

  const { title, payment } = currentProductDetails;

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://shrouded-harbor-84354.herokuapp.com/orders", {
        ...{ title, payment },
        ...data,
        status: 1,
      })
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <div>
        {currentProductDetails && (
          <div className="container py-3">
            <h1
              className="text-uppercase p-3"
              style={{
                color: "#EF5E24",
              }}
            >
              {" "}
              Car Details{" "}
            </h1>
            <div className="row">
              <div className="col-md-7">
                <div>
                  <img
                    className="img-fluid"
                    src={currentProductDetails?.thabnil}
                  />
                </div>

                <div className="my-5">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Details
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Specification
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Fetures
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content my-3 " id="myTabContent">
                    <div
                      className="tab-pane fade show active text-white"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      {currentProductDetails.details}
                    </div>
                    <div
                      class="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="row">
                        <div className="col-md-12 text-white" >
                          {currentProductDetails.Specification}
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <div className="row">
                        <div className="col-md-12 text-white">
                          {currentProductDetails.feture}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                {/* Car Specification start */}
                <div class="card mb-0 mb-0 border">
                  <div class="card-body">
                    <h5 class="card-title text-dark">Volvo xc90 inscription</h5>
                    <div>
                      <span>
                        <small> Price </small>{" "}
                        <span
                          style={{
                            color: "#EF5E24",
                          }}
                        >
                          {" "}
                          $ {currentProductDetails.payment}{" "}
                        </span>
                      </span>
                    </div>
                    {/* <div>
                    <i class="fas fa-location-arrow"></i> South City, New York
                  </div> */}

                    <table class="table table-striped table-dark mt-3">
                      <tbody>
                        <tr>
                          <td>Engine </td>
                          <td>{currentProductDetails.engine}</td>
                        </tr>

                        <tr>
                          <td>Fuel </td>
                          <td>{currentProductDetails.fuel}</td>
                        </tr>

                        <tr>
                          <td>Body Type </td>
                          <td>{currentProductDetails.bodytype} </td>
                        </tr>

                        <tr>
                          <td> Color </td>
                          <td>{currentProductDetails.color}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <br />
                {/* Buy car  */}
                <div
                  className="my-3 card py-5 "
                  style={{
                    alignItems: "center",
                  }}
                >
                  <h3> Seller details </h3>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group my-4">
                      <input
                        className="w-100"
                        {...register("name")}
                        defaultValue={user?.displayName}
                      />
                    </div>

                    <div className="form-group my-4">
                      <input
                        className="w-100"
                        type="email"
                        {...register("email")}
                        defaultValue={user?.email}
                      />
                    </div>

                    <div className="form-group my-4">
                      <input
                        className="w-100"
                        type="text"
                        {...register("address")}
                        placeholder="Address"
                      />
                    </div>

                    <div className="form-group my-4">
                      <input
                        className="w-100"
                        type="number"
                        {...register("phone")}
                        placeholder="Phone"
                      />
                    </div>

                    <input type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default SingleProduct;
