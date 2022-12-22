import React from 'react';
import About from '../About/About';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Advertise/>
            <Categories/>
            <ExtraSection/>
            <About/>
        </div>
    );
};

export default Home;