import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../../assets/image/logo/mobilehut-removebg-preview.png'
import { AuthContext } from '../../../Context/AuthProvider';
import useSeller from '../../../hooks/useSeller';
import Loading from '../Loading/Loading';

const Header = () =>
{
    const { user, logOut, loading } = useContext(AuthContext)
    // console.log(user?.email)

    const handleLogOut = () =>
    {
        logOut()
            .then(() =>
            {
                localStorage.removeItem('accessToken')
                toast.success('Sign Out Complete.', {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },
                });
            })
            .catch(err => console.error(err))
    }

    const [isSeller] = useSeller(user?.email)

    if(loading){
        return <Loading/>
    }

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand>
                <img
                    src={logo}
                    className="mr-3 w-32 h-10 my-2 sm:h-9"
                    alt="Flowbite Logo"
                />

            </Navbar.Brand>
            <div className="flex md:order-2">
                <div>
                    <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                {
                    user?.uid ?
                        <Button onClick={handleLogOut}>
                            Sign Out
                        </Button>
                        :
                        <Link to='/signIn'>
                            <Button>
                                Sign In
                            </Button>
                        </Link>
                }
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <div className='block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 
                     text-gray-700 hover:bg-gray-50 dark:border-gray-700 
                     dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                     md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent
                      md:dark:hover:text-white'
                >
                    <Link to='/'>Home</Link>
                </div>
                <div className='block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 
                     text-gray-700 hover:bg-gray-50 dark:border-gray-700 
                     dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                     md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent
                      md:dark:hover:text-white'
                >
                    <Link to='/blogs'>Blogs</Link>
                </div>
                {
                    user?.uid ?
                        <div htmlFor="dashboard-drawer" className='block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 
                    text-gray-700 hover:bg-gray-50 dark:border-gray-700 
                    dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                    md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent
                     md:dark:hover:text-white'
                        >
                            <Link to='/dashboard'>Dashboard</Link>
                        </div>
                        : 
                        <div></div>
                }

                <div>
                    {
                        isSeller && <>
                            <div className='block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 
                        text-gray-700 hover:bg-gray-50 dark:border-gray-700 
                        dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                        md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent
                         md:dark:hover:text-white'
                            >
                                <Link to='/addProduct'>Add A Product</Link>
                            </div>
                        </>
                    }
                </div>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;