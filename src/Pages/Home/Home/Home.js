import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import Advertise from "../../Advertise/Advertise";
import HomeProduct from "../../Products/Products/HomeProduct";
import Reviews from "../../Reviews/Reviews";
import HomeBanner from "../HomeBanner/HomeBanner";
import LatestNews from "../LatestNews/LatestNews";
import PromoVedio from "../PromoVedio/PromoVedio";
import ShowReviews from "../ShowReviews/ShowReviews";

const Home = () => {
  return (
    <div>
      <Navbar> </Navbar>
      <HomeBanner></HomeBanner>

      <HomeProduct> </HomeProduct>
      <Advertise></Advertise>
                <ShowReviews></ShowReviews>

      <PromoVedio></PromoVedio> 
      <LatestNews></LatestNews>
    
      <Footer></Footer>
    </div>
  );
};

export default Home;
