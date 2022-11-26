import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/image/logo/mobilehut-removebg-preview.png'

const Header = () =>
{
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand>
                <img
                    src={logo}
                    className="mr-3 w-32 h-10 sm:h-9"
                    alt="Flowbite Logo"
                />
                
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Link to='/signIn'>
                <Button className='bg-orange-400 hover:bg-orange-300'>
                    Sign In
                </Button>
                </Link>
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
                <div className='block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 
                     text-gray-700 hover:bg-gray-50 dark:border-gray-700 
                     dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                     md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent
                      md:dark:hover:text-white'
                >
                   <Link to='/'>Home</Link>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;