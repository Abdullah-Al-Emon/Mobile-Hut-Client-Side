import { Card } from 'flowbite-react';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const ProductCards = ({ product }) =>
{
    const { user } = useContext(AuthContext)

    const {
        postingDate,
        productName,
        originalPrice,
        resalePrice,
        yearOfPurchase,
        yearOfUse,
        condition,
        location,
        image,
        description
    } = product

    const handleBooking = () =>
    {
        const booking = {
            buyerEmail: user?.email,
            productName,
            resalePrice,
            image
        }

        fetch(`https://mobilehut-server-side.vercel.app/booking`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data =>
            {
                console.log(data)
                if (data.acknowledged) {
                    toast.success(`${productName} Successfully`)
                }
            })
    }
    return (
        <div className="max-w-2xl mx-auto max-h-lg">
            <Card
                horizontal={true}
                imgSrc={image}
                className='h-full'
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {productName}
                </h5>
                <p className="font-semibold text-gray-700 dark:text-gray-400">
                    Description: {description} <br />
                    Condition: {condition} <br />
                    Meet Location: {location} <br />
                    <small> Original price: {originalPrice} <br /></small>
                    <small>Resale price: {resalePrice} <br /></small>
                    <div className="flex flex-col gap-2 mt-1">
                        <div className="badge">Year of Purchase: {yearOfPurchase}</div>
                        <div className="badge">Used: {yearOfUse}</div>
                    </div>
                    <div className="badge">Posting Date: {postingDate}</div>
                </p>
                <button onClick={() => handleBooking()} className='btn btn-primary'>Book now</button>
            </Card>
        </div>
    );
};

export default ProductCards;