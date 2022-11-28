import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProduct = () =>
{
    const { user } = useContext(AuthContext);

    const { data: myProduct, isLoading, refetch } = useQuery({
        queryKey: ['myProduct'],
        queryFn: async () =>
        {
            try {
                const res = await fetch(`http://localhost:5000/product?email=${user?.email}`, {
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

    const handleDeleteProduct = product =>
    {
        // console.log(product._id)
        fetch(`http://localhost:5000/product/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data =>
            {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`Product ${product.productName} Delete Successfully`)
                }
            })
    }
    const handleAdvertise = product => {
        // console.log(product)
        const products = {
            categoryId: product.categoryId,
            condition: product.condition,
            description: product.description,
            image: product.image,
            location: product.location,
            mobileNumber: product.mobileNumber,
            originalPrice: product.originalPrice,
            postingDate: product.postingDate,
            productName: product.productName,
            resalePrice: product.resalePrice,
            sellerEmail: product.sellerEmail,
            sellerName: product.sellerName,
            yearOfPurchase: product.yearOfPurchase,
            yearOfUse: product.yearOfUse,
            posting_id: product._id
        }
        fetch('http://localhost:5000/advertise',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(products)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            toast.success(`${product.productName} is added advertise successfully`)
        })

    }

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
                            myProduct?.map((product, i) =>
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img alt='' src={product.image} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.productName}</td>
                                    <td className='text-green-600 font-semibold'>Available</td>
                                    <td><button onClick={() => handleAdvertise(product)} className='btn btn-xs btn-primary'>Advertise</button></td>
                                    <td>
                                        <label onClick={() => handleDeleteProduct(product)} className="btn btn-xs btn-error">Delete</label>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;