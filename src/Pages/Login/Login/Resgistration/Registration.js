import { getAuth } from "@firebase/auth";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

import resimg from "../../../../images/resimg.jpg";
import Footer from "../../../../Shared/Footer/Footer";
import Navbar from "../../../../Shared/Navbar/Navbar";
const Registration = () => {
  const [loginData, setLoginData] = useState({});

  const auth = getAuth();
  const { user, registerUser, isLoading  ,autherror } = useAuth();
  // console.log(registerUser);
  const handelonchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newlogindata = { ...loginData };
    newlogindata[field] = value;
    setLoginData(newlogindata);
    // console.log(newlogindata);
  };

  const handelloginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Please password match ");
      return;
    }

    if (loginData.password.length < 6) {
      alert("Please Enter password At least 6 charectar ");
      return;
    }

    registerUser(loginData.email, loginData.password);
    // console.log("i am register ", loginData.email, loginData.password);
    // alert("log in ");
    e.preventDefault();
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 col-md-6 col-12">
          <img className="img-fluid p-4" src={resimg} />
        </div>

        <div className="col-lg-6 col-md-6 col-12">
          <h3 className="text-white"> REGISTER </h3>
          {!isLoading && (
            <form onSubmit={handelloginSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  onChange={handelonchange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group my-3">
                <input
                  type="password"
                  name="password"
                  onChange={handelonchange}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password2"
                  onChange={handelonchange}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Re-Type Password"
                />
              </div>
              <div className="my-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <div>
                <NavLink to="/login">
                  <button>Alredy Register ? Please Login </button>
                </NavLink>
              </div>
            </form>
          )}
          {isLoading && (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {user?.email && (
            <div className="mt-3 alert alert-success" role="alert">
              User Create successfully !!!
            </div>
          )}

          {autherror && (
            <div class=" mt-3 alert alert-danger" role="alert">
              {autherror}
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Registration;
