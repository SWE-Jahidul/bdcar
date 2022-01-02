import React, { useEffect, useState } from "react";

const OrderDisplay = (props) => {
  const [order, setOrder] = useState();

  const { _id, title, name, email, phone, address, status } = props.iteam;

  // console.log(props.sl);
  useEffect(() => {
    fetch("https://shrouded-harbor-84354.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  // console.log(order);

  const getStatus = (status) => {
    return status == 1 ? "Pendding" : "Shipping";
  };
  // console.log(status);
  const handleDelete = (id) => {
    // console.log(id);
    const url = `https://shrouded-harbor-84354.herokuapp.com/order/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount) {
          alert("Delete Successfully");
          const remaining = order.filter((iteam) => iteam._id !== id);
          setOrder(remaining);
        }
      });
  };

  return (
    <tr className="text-white">
      <td className="text-white">{name}</td>
      <td className="text-white">{email}</td>
      <td className="text-white">{phone}</td>
      <td className="text-white">{title}</td>
      <td className="text-white">{address}</td>
      <td className="text-white">{getStatus(status)}</td>
      <td>
        <button
          style={{ backgroundColor: "#EF5E24", border: 0 }}
          onClick={() => handleDelete(_id)}
        >
          {" "}
          <i class="fas fa-dolly"></i> Shipping
        </button>
        <button
          style={{ backgroundColor: "#EF5E24", border: 0 }}
          onClick={() => handleDelete(_id)}
        >
          <i class="fas fa-trash-alt"></i> Delete
        </button>
      </td>
    </tr>
  );
};

export default OrderDisplay;
