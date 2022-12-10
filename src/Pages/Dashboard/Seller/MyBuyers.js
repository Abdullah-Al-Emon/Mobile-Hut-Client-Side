import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyBuyers = () =>
{
    const { user } = useContext(AuthContext);

    const { data: myBuyer, isLoading } = useQuery({
        queryKey: ['myBuyer'],
        queryFn: async () =>
        {
            try {
                const res = await fetch(`https://mobilehut-server-side.vercel.app/payments?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (err) {
                console.error(err)
            }
        }
    })

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='mx-3'>
            <h3 className='text-3xl mb-5'>My Buyers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Buyer Email</th>
                            <th>Price</th>
                            <th>Transaction-Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBuyer?.map((buyer, i) =>
                                <tr key={buyer._id}>
                                    <th>{i + 1}</th>
                                    <td>{buyer.productName}</td>
                                    <td>{buyer.buyerEmail}</td>
                                    <td className='text-green-600 font-semibold'>{buyer.price}TK</td>
                                    <td className='font-semibold text-blue-500'>{buyer.transactionId}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBuyers;