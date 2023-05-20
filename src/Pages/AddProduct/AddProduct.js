import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddProduct = () =>
{
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();

    const todayDate = new Date()
    const date = format(todayDate, 'PP');
    console.log(user.email)

    const handleAddProducts = (data) =>
    {
        const image = data.image[0]
        const fromData = new FormData();
        fromData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url,{
            method: 'POST',
            body: fromData
        })
        .then(res => res.json())
        .then(imgData => {
            console.log(imgData.data.url)
            const product = {
                postingDate: date,
                sellerName: user?.displayName,
                sellerEmail: user?.email,
                productName: data.productName,
                categoryId: data.categoryId,
                originalPrice: data.originalPrice,
                resalePrice: data.resalePrice,
                yearOfPurchase: data.yearOfPurchase,
                yearOfUse: data.yearOfUse,
                condition: data.condition,
                mobileNumber: data.mobileNumber,
                location: data.location,
                image: imgData.data.url,
                description: data.description
            }
            fetch('https://mobilehut-server-side.vercel.app/product',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(product)
            })
            .then(res => res.json())
            .then( result => {
                console.log(result)
                toast.success(`${data.productName} is added successfully`)
                navigate('/dashboard/myProduct')
            })
        })
    }

    return (
        <div>
            <h2 className='text-3xl text-center my-4 font-semibold'>Add Your Product</h2>
            <div className='h-[650px] md:h-[750px] md:mx-5 md:my-7 mx-3'>
                <div className='md:w-[700px] p-7 mx-auto shadow-2xl rounded-xl'>
                    <form onSubmit={handleSubmit(handleAddProducts)}>
                        <div className='grid md:grid-cols-2 gap-3'>
                            <div className="form-control  my-2">
                                <label className="label">
                                    <span className='label-text font-semibold'>Product Name</span>
                                </label>
                                <input type='text'
                                    className='input input-bordered w-full '
                                    {...register("productName", { required: "Product Name is required" })}
                                />
                                {errors.productName && <p className='text-red-500'>{errors.productName.message}</p>}
                            </div>
                            <div className="form-control w-full my-2">
                                <label className="label">
                                    <span className='label-text font-semibold'>Product Category</span>
                                </label>
                                <select className="select input-bordered w-full"
                                    {...register("categoryId", { required: "Product Category is required" })}
                                >
                                    <option value="1">Realme</option>
                                    <option value="2">Redmi</option>
                                    <option value="3">One Plus</option>
                                </select>
                                {errors.categoryId && <p className="text-red-700">{errors.categoryId?.message}</p>}
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-3'>
                            <div className="form-control w-full  my-2">
                                <label className="label">
                                    <span className='label-text font-semibold'>Original Price</span>
                                </label>
                                <input type='number'
                                    className='input input-bordered w-full '
                                    {...register("originalPrice", { required: "Original Price is required" })}
                                />
                                {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                            </div>
                            <div className="form-control w-full  my-2">
                                <label className="label">
                                    <span className='label-text font-semibold'>Resale Price</span>
                                </label>
                                <input type='number'
                                    className='input input-bordered w-full '
                                    {...register("resalePrice", { required: "Resale Price is required" })}
                                />
                                {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-3'>
                            <div className="form-control w-full  my-2">
                                <label className="label">
                                    <span className='label-text font-semibold'>Year of Purchase</span>
                                </label>
                                <input type='date'
                                    className='input input-bordered w-full '
                                    {...register("yearOfPurchase", { required: "Year of Purchase is required" })}
                                />
                                {errors.yearOfPurchase && <p className='text-red-500'>{errors.yearOfPurchase.message}</p>}
                            </div>
                            <div className="form-control w-full  my-2">
                                <label className="label">
                                    <span className='label-text font-semibold'>Year of Use</span>
                                </label>
                                <input type='number'
                                    className='input input-bordered w-full '
                                    {...register("yearOfUse", { required: "Year of Use is required" })}
                                />
                                {errors.yearOfUse && <p className='text-red-500'>{errors.yearOfUse.message}</p>}
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-3'>
                            <div className="form-control w-full  my-2">
                                <label className="label">
                                    <span className='label-text font-semibold'>Condition</span>
                                </label>
                                <select className="select input-bordered w-full"
                                    {...register("condition", { required: "Condition is required" })}
                                >
                                    <option value="Excellent">Excellent</option>
                                    <option value="Good">Good</option>
                                    <option value="Fair">Fair</option>
                                </select>
                                {errors.condition && <p className="text-red-700">{errors.condition?.message}</p>}
                            </div>
                            <div className="form-control w-full  my-2">
                                <label className="label">
                                    <span className='label-text font-semibold'>Mobile Number</span>
                                </label>
                                <input type='tel'
                                    defaultValue='01'
                                    className='input input-bordered w-full '
                                    {...register("mobileNumber", { required: "Mobile Number is required" })}
                                />
                                {errors.mobileNumber && <p className='text-red-500'>{errors.mobileNumber.message}</p>}
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-3'>
                            <div className="form-control w-full  my-2">
                                <label className="label">
                                    <span className='label-text font-semibold'>Location</span>
                                </label>
                                <input type='text'
                                    className='input input-bordered w-full '
                                    {...register("location", { required: "Location is required" })}
                                />
                                {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                            </div>
                            <div className="form-control w-full my-2">
                                <label className="label">
                                    <span className='label-text font-semibold'>Photo</span>
                                </label>
                                <input type='file'
                                    className='input input-bordered w-full '
                                    {...register("image", { required: "Photo is required" })}
                                />
                                {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                            </div>
                        </div>
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className='label-text font-semibold'>Description</span>
                            </label>
                            <textarea
                                {...register("description", { required: "Description is required" })}
                                className="textarea textarea-bordered"></textarea>
                                {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                        </div>
                        <input className='btn btn-accent w-full text-white' value='Add Product' type="submit" />
                    </form>

                </div>
            </div >
        </div>
    );
};

export default AddProduct;