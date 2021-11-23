import React from "react";
import "./Deshbord.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AdminRoute from "../Login/AdminRoute/AdminRoute";
import AddProduct from "./AddProduct/AddProduct";
import DashbordHome from "./Home/DashbordHome";
import MakeaAdmin from "./MakeAdmin/MakeaAdmin";
import ManageOrder from "./ManageOrder/ManageOrder";
import Pay from "./Customar/Pay/Pay";
import Addnews from "./AddNews/Addnews";
import MyOrder from "./MyOrder/MyOrder";
import UserReview from "./UserReview/UserReview";

const Dashbord = () => {
  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();

  return (
    <div>
      <div className="container-fluid fixed-top bg-dark pt-3">
        <div className="row">
          <div className="col-xl-2 col-sm-3 col-0 collapse show sidebar">
            <div>
              <h3 style={{ color: "white" }}>Dash Borad</h3>
            </div>
          </div>
          <div className="col px-5 ms-5" style={{ textAlign: "right" }}>
            <div>
              <button
                className="text-white p-2"
                style={{
                  backgroundColor: "#EF5E24",
                  border: 0,
                  borderRadius: 50,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
                onClick={logOut}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="row vh-100 flex-nowrap">
          <div className="col-xl-2 col-sm-3 col-auto collapse show sidebar bg-dark text-white px-0">
            <ul
              className=" nav flex-column flex-nowrap text-truncate navbar-dark bg-dark mx-auto position-fixed pt-2 vh-100"
              id="sidebar"
            >
              <NavLink to="/home" style={{ paddingTop: 80 }}>
                <li className="nav-item">
                  <a className="nav-link " href="/home">
                    {" "}
                    <i className="fa fa-home "> </i>
                    <span className="ml-1 d-none d-sm-inline">Home</span>
                  </a>
                </li>
              </NavLink>
              <NavLink to={`${url}`}>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-cog"></i>
                    <span className="ml-1 d-none d-sm-inline">Dashboard</span>
                  </a>
                </li>
              </NavLink>
              {admin ? (
                <NavLink to={`${url}/makeadmin`}>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-star"></i>
                      <span className="ml-1 d-none d-sm-inline">
                        Make Admin
                      </span>
                    </a>
                  </li>
                </NavLink>
              ) : (
                <div> </div>
              )}

              {admin ? (
                <NavLink to={`${url}/addproducts`}>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i class="fas fa-plus"></i>{" "}
                      <span className="ml-1 d-none d-sm-inline">
                        Add Products
                      </span>
                    </a>
                  </li>
                </NavLink>
              ) : (
                <NavLink to={`${url}/usereview`}>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i class="fas fa-plus"></i>
                      <span className="ml-1 d-none d-sm-inline">Review</span>
                    </a>
                  </li>
                </NavLink>
              )}
              {admin ? (
                <NavLink to={`${url}/manageorder`}>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i class="fas fa-plus"></i>{" "}
                      <span className="ml-1 d-none d-sm-inline">
                        Manage Order
                      </span>
                    </a>
                  </li>
                </NavLink>
              ) : (
                <NavLink to={`${url}/pay`}>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i class="fas fa-plus"></i>{" "}
                      <span className="ml-1 d-none d-sm-inline">Pay</span>
                    </a>
                  </li>
                </NavLink>
              )}

              <NavLink to={`${url}/myorder`}>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i class="fas fa-plus"></i>{" "}
                    <span className="ml-1 d-none d-sm-inline">My Order</span>
                  </a>
                </li>
              </NavLink>

              {admin ? ( <NavLink to={`${url}/news`}>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i class="fas fa-plus"></i>{" "}
                    <span className="ml-1 d-none d-sm-inline">Add News</span>
                  </a>
                </li>
              </NavLink>
              ) : ( 
                <> </>
              ) }
            </ul>
          </div>
          <div className="col py-3">
            <Switch>
              <Route exact path={path}>
                <DashbordHome></DashbordHome>
              </Route>
              <AdminRoute path={`${path}/makeadmin`}>
                <MakeaAdmin></MakeaAdmin>
              </AdminRoute>

              <AdminRoute path={`${path}/addproducts`}>
                <AddProduct></AddProduct>
              </AdminRoute>
              <AdminRoute path={`${path}/manageorder`}>
                <ManageOrder></ManageOrder>
              </AdminRoute>
              <AdminRoute path={`${path}/news`}>
                <Addnews></Addnews>
              </AdminRoute>

              <Route path={`${path}/myorder`}>
                <MyOrder></MyOrder>
              </Route>

              <Route path={`${path}/usereview`}>
                <UserReview></UserReview>
              </Route>
              <Route path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
