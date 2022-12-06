import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllSeller = () =>
{

    const [sellers, setSellers] = useState([])

    const fetchData = () =>
    {
        axios.get(`https://mobilehut-server-side.vercel.app/users?seller=${'Seller'}`)
            .then(res => {
                setSellers(res.data.allSeller)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDeleteUser = user =>
    {
        console.log(user._id)
       fetch(`https://mobilehut-server-side.vercel.app/users/${user._id}`,{
        method: 'DELETE',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
       })
       .then(res => res.json())
       .then(data => {
        if (data.deletedCount > 0) {
            toast.success(`${user.name} Delete Successfully`)
        }
       })
    }

    const handleVerify = user => {
        console.log(user.email)
        fetch(`https://mobilehut-server-side.vercel.app/users/${user._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then( res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0) {
                toast.success('Verify Successful.')
            }
        })
    }

    // console.log(sellers)
    return (
        <div className='mx-3'>
            <h3 className='text-3xl mb-5'>My sellers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>User Verify</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map((seller, i) =>
                                <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td><button onClick={() => handleVerify(seller)}  className='btn btn-success btn-xs'>Verify</button></td>
                                    <td><button onClick={() => handleDeleteUser(seller)}  className='btn btn-xs btn-primary'>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;