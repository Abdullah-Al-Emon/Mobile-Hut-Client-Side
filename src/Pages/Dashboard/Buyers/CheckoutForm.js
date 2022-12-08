import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = ({ booking }) =>
{
    const { resalePrice: price, buyerEmail, sellerEmail, productName, _id, productId } = booking
    // console.log(booking)
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('')
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState(false)

    useEffect(() =>
    {
        // Create PaymentIntent as soon as the page loads
        fetch("https://mobilehut-server-side.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) =>
    {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log("[error]", error)
            setCardError(error.message)
        }
        else {
            console.log('[PaymentMethod]', paymentMethod)
            setCardError('')
        }
        setSuccess('')
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: productName,
                        email: buyerEmail
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }

        if (paymentIntent.status === 'succeeded') {
            console.log('card info', card)
            // store payment info in the database
            const payment = {
                price,
                transactionId: paymentIntent.id,
                buyerEmail,
                sellerEmail,
                bookingId: _id,
                productId,
                productName
            }
            fetch('https://mobilehut-server-side.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data =>
                {
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed')
                        setTransactionId(paymentIntent.id)
                    }
                })
        }
        setProcessing(false)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-primary mt-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;