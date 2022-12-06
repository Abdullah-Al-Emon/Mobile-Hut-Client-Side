import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductCards from './ProductCards';

const Products = () =>
{
    const products = useLoaderData()
    const [booking, setBooking] = useState(null);

    return (
        <div className='mt-14 mb-5 mx-4'>
            <div className='text-center my-5'>
                <h2 className='text-4xl font-semibold'>Our Products</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 lg:grid-cols-2 '>
                {
                    products.map(product => <ProductCards
                        key={product._id}
                        product={product}
                        setBooking={setBooking}
                    ></ProductCards>)
                }
            </div>
            {
                booking &&
                <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;