import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProduct = () => {
    const {user} = useContext(AuthContext);
    const emai= user.email
    console.log(emai)

    const {data: myProduct} = useQuery({
        queryKey: ['myProduct'],
        queryFn: async () => {
            try{
                const res = await fetch(`http://localhost:5000/product?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
                })
                const data = await res.json();
                return data;
            }
            catch(err){
                console.error(err)
            }
        }
    })
    console.log(myProduct)

    return (
        <div>
            
        </div>
    );
};

export default MyProduct;