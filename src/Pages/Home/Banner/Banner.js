import { Carousel } from 'flowbite-react';
import React from 'react';
import img1 from '../../../assets/image/Banner/img1.jpg'
import img2 from '../../../assets/image/Banner/img2.jpg'
import img3 from '../../../assets/image/Banner/img3.jpg'
import img4 from '../../../assets/image/Banner/img4.jpg'

const Banner = () =>
{
    return (
        <div className="h-[70vh]">
            <Carousel slide={false}>
                <img
                    src={img1}
                    className='h-full'
                    alt="..."
                />
                <img
                    src={img2}
                    className='h-full'
                    alt="..."
                />
                <img
                    src={img3}
                    className='h-full'
                    alt="..."
                />
                <img
                    src={img4}
                    className='h-full'
                    alt="..."
                />
            </Carousel>
        </div>
    );
};

export default Banner;