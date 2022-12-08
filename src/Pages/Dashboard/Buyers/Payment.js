import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

const Payment = () =>
{
    const booking = useLoaderData()

    const {productName, resalePrice} = booking;
    console.log(booking)

    return (
        <div className='mx-3'>
        <h3 className="text-3xl">Payment for {productName}</h3>
        <p className="text-xl">Please Pay <strong>{resalePrice}TK</strong> </p>
        <div className='w-96 my-12'>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                booking={booking}
                />
            </Elements>
        </div>
    </div>
    );
};

export default Payment;