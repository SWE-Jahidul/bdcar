import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";
import Login from "./Pages/Login/Login/Login";
import Registration from "./Pages/Login/Login/Resgistration/Registration";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact/Contact";
import Products from "./Pages/Products/Products/Products";
import SingleProduct from "./Pages/Products/SingleProduct/SingleProduct";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashbord from "./Pages/Dashbord/Dashbord";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import AllNews from "./Pages/Home/LatestNews/AllNews";
import NotFound from "./Shared/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/products">
            <Products></Products>
          </Route>

          <PrivateRoute path="/singleproduct/:productId">
            <SingleProduct></SingleProduct>
          </PrivateRoute>

          <Route path="/dashbord">
            <Dashbord></Dashbord>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>

          <Route path="/allnews">
            <AllNews></AllNews>
          </Route>
          <Route path="/">
            <Home />
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
