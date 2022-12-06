import { useContext } from "react";
import toast from "react-hot-toast"
import { AuthContext } from "../../../Context/AuthProvider";

const BookingModal = ({ booking, setBooking }) =>
{
    const { user } = useContext(AuthContext)

    const {
        productName,
        resalePrice,
        image,
        sellerEmail
    } = booking;

    const handleBooking = event =>
    {
        event.preventDefault();
        console.log(event)
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const resalePrice = form.resalePrice.value;
        const metingLocation = form.metingLocation.value;

        const bookings = {
            buyerEmail: email,
            productName,
            resalePrice,
            image,
            sellerEmail,
            name,
            phone,
            metingLocation
        }

        fetch(`https://mobilehut-server-side.vercel.app/booking`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data =>
            {
                console.log(data)
                if (data.acknowledged) {
                    setBooking(null)
                    toast.success(`${productName} Booking Confirmed`)
                }
            })
    }



    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="resalePrice" type="number" defaultValue={resalePrice} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        {/* <span name="resalePrice" type="number" disabled placeholder="Email Address" className="input w-full input-bordered">{resalePrice} TK</span> */}
                        <input name="phone" type="tel" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="metingLocation" type="tel" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;