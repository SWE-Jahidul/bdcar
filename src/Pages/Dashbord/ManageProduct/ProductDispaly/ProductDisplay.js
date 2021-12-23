import React, { useEffect } from "react";
import { useState } from "react";

const ProductDisplay = (props) => {
  const [product, setProduct] = useState();
  const { _id, title } = props.item;
  useEffect(() => {
    fetch("http://localhost:5000/products/")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log("data test", data);
      });
  }, []);
  // console.log(order);

  //   const getStatus = (status) => {
  //     return status == 1 ? "Pendding" : "Shipping";
  //   };
  // console.log(status);
  const handleDelete = (id) => {
    // console.log(id);
    // alert("test")
    const url = `http://localhost:5000/product/${id}`;
    console.log("url", url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("delete data", data);
        // Prolem is here ?

        if (data.deletedCount) {
          alert("Delete Successfully");
          const remaining = product.filter((item) => item._id !== id);
          setProduct(remaining);
        }
      });
    alert("Delete Successfully");
  };
  return (
    <div>
      <tr className="text-white">
        <td className="text-white">{title}</td>
        <td className="ms-2">
          {/* <button style={{ backgroundColor:'#EF5E24', border:0}} onClick={() => handleDelete(_id)}> <i class="fas fa-dolly"></i> Shipping</button> */}
          <button
            style={{ backgroundColor: "#EF5E24", border: 0 }}
            onClick={() => handleDelete(_id)}
          >
            <i class="fas fa-trash-alt"></i> Delete
          </button>
        </td>
      </tr>
    </div>
  );
};

export default ProductDisplay;
