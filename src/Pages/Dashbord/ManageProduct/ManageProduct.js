import React, { useEffect, useState } from "react";
import ProductDisplay from "./ProductDispaly/ProductDisplay";

const ManageProduct = () => {
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log("display product ",data);
        setProduct(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-white">Manage Order</h1>
      <table class="table table-striped text-white">
        <thead>
          <tr className="text-white">
            <th className="text-white" scope="col">
              Title
            </th>

            <th className="text-white" scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {product?.map((item) => (
            <ProductDisplay key={item._id} item={item}>
            
            </ProductDisplay>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
