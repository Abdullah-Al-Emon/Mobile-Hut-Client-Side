import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) =>
{
    const { logo, name, category_id } = category;
    return (
        <Link data-aos="zoom-in" to={`/category/${category_id}`}>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="Shoes" className="rounded-xl h-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Category;