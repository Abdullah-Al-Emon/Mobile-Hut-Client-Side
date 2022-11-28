import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () =>
{

    const [buyers, setBuyers] = useState([])

    const fetchData = () =>
    {
        axios.get(`https://mobilehut-server-side.vercel.app/users?buyer=${'Buyer'}`)
            .then(res =>
            {
                setBuyers(res.data.allBuyer)
            })
    }

    useEffect(() =>
    {
        fetchData()
    }, [])

    const handleDeleteUser = user =>
    {
        // fetch(`https://mobilehut-server-side.vercel.app/users/${user._id}`,{
        //     method: 'DELETE',
        //     headers: {
        //         authorization: `bearer ${localStorage.getItem('accessToken')}`
        //     }
        //    })
        //    .then(res => res.json())
        //    .then(data => {
        //     if (data.deletedCount > 0) {
        //         toast.success(`${user.name} Delete Successfully`)
        //     }
        //    })
        fetch(`https://mobilehut-server-side.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data =>
            {
                if (data.deletedCount > 0) {
                    toast.success(`${user.name} Delete Successfully`)
                }
            })
    }

    // console.log(buyers)
    return (
        <div className='mx-3'>
            <h3 className='text-3xl mb-5'>My buyers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers?.map((buyer, i) =>
                                <tr key={buyer._id}>
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td><button onClick={() => handleDeleteUser(buyer)} className='btn btn-xs btn-primary'>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;