import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import PaymentModal from './PaymentModal';

const MyOrder = () =>
{

    const [orders, setOrders] = useState([])
    const [modal, setModal] = useState(null)
    const { user } = useContext(AuthContext);

    const fetchData = () =>
    {
        axios.get(`https://mobilehut-server-side.vercel.app/booking?email=${user?.email}`)
            .then(res =>
            {
                setOrders(res.data)
            })
    }

    useEffect(() =>
    {
        fetchData()
    },)

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
                            <th>Price</th>
                            <th>Payment</th>
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
                                    </td>
                                    <td className='text-green-600 font-semibold'>{order.resalePrice}</td>
                                    <td>{
                                        order.resalePrice && !order.paid &&
                                        <label htmlFor="my-modal-4" onClick={() => setModal(order)} className='btn btn-primary btn-sm'>Pay</label>
                                    }
                                        {
                                            order.resalePrice && order.paid && <span className='text-primary font-semibold'>Paid</span>
                                        }</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                modal &&
                <PaymentModal
                    modal={modal}
                    setModal={setModal}
                ></PaymentModal>
            }
        </div>
    );
};

export default MyOrder;