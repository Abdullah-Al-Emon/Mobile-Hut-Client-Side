import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () =>
{
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('')

    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    if(token){
        navigate('/')
    }

    const handleSignUp = data =>
    {
        console.log(data)
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result =>
            {
                const user = result.user;
                console.log(user)
                toast('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() =>
                    {
                        saveUser(data.name, data.email, data.user)
                    })
                    .catch(err => console.error(err))

            })
            .catch(error =>
            {
                console.error(error)
                setSignUpError(error.message)
            })
    }

    const saveUser = (name, email, user) =>
    {
        const users = { name, email, user };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data =>
            {
              setCreatedUserEmail(email)
            })
    }

    const handleGoogleSignIn = () =>
    {
        googleSignIn()
            .then(result =>
            {
                const user = result.user;
                console.log(user)
                saveUser(user.displayName, user.email, 'Buyer')
                setCreatedUserEmail(user?.email)
            })
            .catch(err => {
                setSignUpError(err)
                console.error(err)
            })
    }


    return (
        <div className='h-[750px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-2xl rounded-xl'>
                <h2 className='text-xl text-center font-semibold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs my-2">
                        <label className="label">
                            <span className='label-text font-semibold'>Name</span>
                        </label>
                        <input type='text'
                            className='input input-bordered w-full max-w-xs'
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-red-700">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs my-2">
                        <label className="label">
                            <span className='label-text font-semibold'>Email</span>
                        </label>
                        <input type='text'
                            className='input input-bordered w-full max-w-xs'
                            {...register("email", { required: "Email Address is required" })}
                        />
                        {errors.email && <p className="text-red-700">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs my-2">
                        <label className="label">
                            <span className='label-text font-semibold'>Password</span>
                        </label>
                        <input type='password'
                            className='input input-bordered w-full max-w-xs'
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                pattern: { value: /(?=.*[!@#$&*])/, message: 'Password Must One Spacial Character' }
                            })} />
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs my-2">
                        <label className="label">
                            <span className='label-text font-semibold'>User</span>
                        </label>
                        <select 
                        className='input input-bordered w-full max-w-xs'
                        {...register("user")}>
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>
                        {errors.user && <p className="text-red-700">{errors.user?.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full' value='Sign Up' type="submit" />
                </form>
                <p className='text-sm text-center my-4 font-semibold'>Already have an account? <Link className='text-secondary' to='/signIn'>Please Log In</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default SignUp;