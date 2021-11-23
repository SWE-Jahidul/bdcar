import React, { useState } from "react";
import { NavLink,useLocation ,useHistory} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import resimg from "../../../images/resimg.jpg";
import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, autherror } = useAuth();

const location = useLocation();
const history = useHistory();

  const handelonchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newlogindata = { ...loginData };
    newlogindata[field] = value;
    setLoginData(newlogindata);
    // console.log(value);
  };

  const handelloginSubmit = (e) => {
    loginUser(loginData.email, loginData.password , location , history);

    e.preventDefault();

  };
  return (
    <>
<Navbar></Navbar>
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 col-md-12">
          <img className="img-fluid p-4" src={resimg} />
        </div>
        <div className="col-lg-6 col-md-12">
          <div>
            <h3 className="text-white"> LOGIN </h3>
            <form onSubmit={handelloginSubmit}>
              <div className="form-group my-3">
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
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  onChange={handelonchange}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <div className="my-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>

              <NavLink to="/registration">
                <button>new User ? Please Register</button>
              </NavLink>

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
            </form>
           
          </div>
        </div>
      </div>
    </div>
<Footer></Footer>
    </>
    
  );
};

export default Login;
