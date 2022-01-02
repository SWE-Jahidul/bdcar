import React, { useEffect, useState } from "react";
import ProductDisplay from "./ProductDispaly/ProductDisplay";
import Loader from "react-loader-spinner";


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


  console.log("i have contain All procust " , product);

  return (
    <div>
      <h1 className="text-white">Manage Product</h1>
      <Loader
    type="Puff"
    color="#EF5E24"
    height={50}
    width={50}
    timeout={1000} //1 secs
  />
      <table class="table table-striped text-white">
        
   
        <thead>
          <tr className="text-white">
            <th className="text-white" scope="col">
              Title
            </th>
            <th className="text-white" scope="col">
              Adding Date of Product  
            </th>

            <th className="text-white" scope="col">
              Action
            </th>
          </tr>
        </thead>
        
  
        <tbody className="" >
         
            {product?.map((item) => (
              <ProductDisplay key={item._id} item={item}></ProductDisplay>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
