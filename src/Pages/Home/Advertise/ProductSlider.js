import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { useQuery } from '@tanstack/react-query';

const ProductSlider = () =>
{

    const { data: advertise = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () =>
        {
            const res = await fetch('https://mobilehut-server-side.vercel.app/pro');
            const data = await res.json();
            return data;
        }
    })
    // console.log(advertise)

    return (
        <div className='my-4 mx-4'>
            <Swiper
                // loop={true}
                // loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 50
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 50
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    },
                }}
            >
                {
                    advertise.map(add =>
                        <SwiperSlide key={add._id}>
                            <div className="card md:w-72 bg-base-100 h-80 shadow-xl image-full">
                                <figure><img src={add.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{add.productName}</h2>
                                    <p><strong>Price: {add.resalePrice} TK</strong></p>
                                    <p>{add.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default ProductSlider;