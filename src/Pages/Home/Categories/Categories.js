import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () =>
        {
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='mt-16 mb-5 mx-4'>
        <div className='text-center my-5'>
            <h3 className='text-xl font-bold text-blue-700 uppercase'>Our Products Category</h3>
            <h2 className='text-4xl font-semibold'>Used Mobile Sell</h2>
        </div>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categories.map(category => <Category
                key={category._id}
                category={category}
                ></Category>)
            }
        </div>
    </div>
    );
};

export default Categories;