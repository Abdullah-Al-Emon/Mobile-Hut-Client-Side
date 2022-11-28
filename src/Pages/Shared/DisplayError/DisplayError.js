// import React, { useContext } from 'react';
import { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
// import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {
    const error = useRouteError()
    const { logOut } = useContext(AuthContext);

    const handleLogOut = () =>
    {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }
    
    return (
        <>
        <div className='flex flex-col min-h-[700px] justify-center items-center'>
          <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
          <br />
          {error && (
            <div className='flex flex-col justify-center items-center'>
              <p className='font-semibold text-4xl'>{error.status}</p>
              <p className='text-red-500 font-semibold text-3xl'>{error.statusText || error.message}</p>
              <h3 className='text-2xl'>Please <button onClick={handleLogOut}  className='btn btn-ghost text-secondary underline '>Log Out</button> and log back in</h3>
            </div>
          )}
        </div>
      </>
    );
};

export default DisplayError;