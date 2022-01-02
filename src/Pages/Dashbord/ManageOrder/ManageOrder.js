import React, { useEffect, useState } from 'react';
import OrderDisplay from './OrderDisplay/OrderDisplay';
import useAuth from '../../../hooks/useAuth'
const ManageOrder = () => {
    const [order, setOrder] = useState([]);
    const {user } = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/orders',{
            headers : {
                'authorization' : `Bearer ${sessionStorage.getItem('idToken')}`
            }
        })

            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);
  
    return (
        <div>
        <h1 className="text-white">Manage Order</h1>
        <table class="table table-striped text-white">
            <thead>
                <tr className="text-white">

                    <th className="text-white"  scope="col">Name</th>
                    <th className="text-white" scope="col">Email</th>
                    <th className="text-white" scope="col">Phone</th>
                    <th  className="text-white" scope="col">Package</th>
                    <th className="text-white" scope="col">Address</th>
                    <th className="text-white" scope="col">Status</th>
                    <th className="text-white" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>

                {
                    order?.map((iteam) => (<OrderDisplay
                        key={iteam._id}
                        iteam={iteam}
                    > </OrderDisplay>))
                }

            </tbody>
        </table>
    </div>
    );
};

export default ManageOrder;