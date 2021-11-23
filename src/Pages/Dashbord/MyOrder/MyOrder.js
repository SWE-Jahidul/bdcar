import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MyDisplay from "./MyDisplay";

const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const [data, setData] = useState([]);
  const { users } = useAuth();

  useEffect(() => {
    fetch("https://shrouded-harbor-84354.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) =>{
        console.log("my Order data",data);
        setOrder(data)

      } );
  }, []);

  useEffect(() => {
    if (order.length > 0) { const matchedData = order?.filter((detail) => detail?.email == users?.email );
      setData(matchedData);
    }
  }, [order]);
  return (
    <div>
      <div className="text-center m-5">
        <h1 className="text-white">This is My Order Page</h1>
      </div>
      <table class="table">
        <thead>
          <tr className="text-white">
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Package</th>
            <th scope="col">Address</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {order?.map((iteam, index) => (
            <MyDisplay sl={index} iteam={iteam}>
              {" "}
            </MyDisplay>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
