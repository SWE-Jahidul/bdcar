import React, { useEffect, useState } from 'react';

const MyDisplay = (props) => {
   
    const [order, setOrder] = useState();
    const { _id, title, name, email, phone, address, status } = props.iteam

    useEffect(() => {
        fetch('https://shrouded-harbor-84354.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);
    console.log("order",order);

    const getStatus = (status) => {

        return (status == 1) ? "pendding" : "Active"

    }

    const handleDelete = id => {
        console.log(id);
        const url = `https://shrouded-harbor-84354.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    alert('Delete Successfully')
                    const remaining = order.filter(iteam => iteam._id !== id);
                    setOrder(remaining);
                }
            })
    }
    return (
        <>
            <tr >
                
                <td className="text-white" >{name}</td>
                <td  className="text-white">{email}</td>
                <td  className="text-white">{phone}</td>
                <td  className="text-white">{title}</td>
                <td  className="text-white">{address}</td>
                <td  className="text-white">{getStatus(status)}</td>
                <td><button onClick={() => handleDelete(_id)}  >Delete</button></td>
            </tr>

        </>
    );
};

export default MyDisplay;