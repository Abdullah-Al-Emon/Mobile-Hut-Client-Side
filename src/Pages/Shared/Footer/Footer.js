import { Footer } from 'flowbite-react';
// import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble} from '@heroicons/react/24/solid'
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/image/logo/mobilehut-removebg-preview.png'

const Footers = () =>
{
    return (

        <Footer container={true}>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Link to='/'>
                            <img
                                src={logo}
                                className="mr-3 w-32 mb-2 h-10 sm:h-9"
                                alt="Flowbite Logo"
                            // name="Flowbite"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 mb-2 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Mobile hut
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Tailwind CSS
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Github
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Discord
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                {/* <Footer.Divider /> */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="Mobile hut™"
                        year={2022}

                    />
                </div>
            </div>
        </Footer>
    );
};

export default Footers;