import React, { useEffect, useState } from "react";
import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";

const AllNews = () => {
  const [newss, setNewss] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-harbor-84354.herokuapp.com/news")
      .then((res) => res.json())
      .then((data) => {
        console.log("news", data);
        setNewss(data);
      });
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="container py-3">
        <h3
          className="text-center"
          style={{
            color: "#EF5E24",
          }}
        >
          {" "}
          All News
        </h3>

        {newss?.map((ns) => (
          <div className="row py-3">
            <div className="col-md-4 col-md-4 col-12 ">
              <div
                className="card"
                style={{
                  backgroundColor: "#1C1C1C",
                }}
              >
                <img
                  className="card-img-top text-white"
                  src={ns.thabnil}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title text-white">{ns.title} </h5>
                  <p className="card-text text-white">{ns.discription}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer></Footer>
    </>
  );
};

export default AllNews;
