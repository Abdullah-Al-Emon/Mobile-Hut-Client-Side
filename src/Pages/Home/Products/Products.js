import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCards from './ProductCards';

const Products = () => {
    const products = useLoaderData()
    // console.log(products)

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
                ></ProductCards>)
            }
        </div>
    </div>
    );
};

export default Products;