import React from 'react';
import About from '../About/About';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Advertise/>
            <Categories/>
            <About/>
        </div>
    );
};

export default Home;