import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrder = () => {

    const [orders, setOrders] = useState([])
    const {user} = useContext(AuthContext);

    const fetchData = () =>
    {
        axios.get(`http://localhost:5000/booking?email=${user?.email}`)
            .then(res => {
                setOrders(res.data)
            })
        }
        
        useEffect(() => {
            fetchData()
        }, [])
        console.log(orders)

    return (
        <div className='mx-3'>
        <h3 className='text-3xl mb-5'>My Products</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>option</th>
                        <th>Advertise</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((order, i) =>
                            <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img alt='' src={order.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>{order.productName} <br />
                                {order.resalePrice}
                                </td>
                                <td className='text-green-600 font-semibold'>Available</td>
                                <td><button className='btn btn-xs btn-primary'>Advertise</button></td>
                               
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOrder;