import { Card } from 'flowbite-react';
import PrivateRoute from '../../../Routes/PrivateRoute/PrivateRoute';


const ProductCards = ({ product, setBooking }) =>
{
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
                    {description} <br />
                    Condition: {condition} <br />
                    Meet Location: {location} <br />
                    <small> Original price: {originalPrice} TK<br /></small>
                    <small>Resale price: {resalePrice} TK<br /></small>
                    <div className="flex flex-col gap-2 mt-1">
                        <div className="badge">Year of Purchase: {yearOfPurchase}</div>
                        <div className="badge">Used: {yearOfUse} Year</div>
                    </div>
                    <div className="badge">Posting Date: {postingDate}</div>
                    {/* <button className='btn badge btn-sm mt-2'>Wishlist</button> */}
                </p>
                <PrivateRoute>
                    <label
                        htmlFor="my-modal-3"
                        className='btn btn-primary'
                        onClick={() => setBooking(product)}
                    >Book now</label>
                </PrivateRoute>
            </Card>
        </div>
    );
};

export default ProductCards;