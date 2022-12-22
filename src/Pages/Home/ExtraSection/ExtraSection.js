import React from 'react';

const ExtraSection = () =>
{
    return (
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-8 lg:py-10">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    Our Customer Review
                </h2>
            </div>
            <div data-aos="zoom-in-down" className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:py-10">
                <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
                    <div>
                        <img
                            className="object-cover w-24 h-24 rounded-full shadow"
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            alt="Person"
                        />
                        <div className="flex flex-col justify-center mt-2">
                            <p className="text-lg font-bold">Oliver Aguilerra</p>
                            <p className="text-sm tracking-wide text-gray-800">
                                Pommy ipsum bent as a nine bob note naff off biscuits nowt, a
                                cuppa unhand me sir hadn't done it in donkey's years sod's law.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img
                            className="object-cover w-24 h-24 rounded-full shadow"
                            src="https://www.perfectpassportphotos.com/web/img/mistakes/right_lightning.webp"
                            alt="Person"
                        />
                        <div className="flex flex-col justify-center mt-2">
                            <p className="text-lg font-bold">Marta Clermont</p>
                            <p className="text-sm tracking-wide text-gray-800">
                                Secondary fermentation degrees plato units of bitterness, cask
                                conditioned ale ibu real ale pint glass craft beer. krausen goblet
                                grainy ibu.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img
                            className="object-cover w-24 h-24 rounded-full shadow"
                            src="https://assets.website-files.com/5b103846b22be9edcc1dac22/5b1a8efc383e27c46d2f21c9_thumb_passports2.jpg"
                            alt="Person"
                        />
                        <div className="flex flex-col justify-center mt-2">
                            <p className="text-lg font-bold">Alice Melbourne</p>
                            <p className="text-sm tracking-wide text-gray-800">
                                I just closed my eyes and in a nanosecond I cured myself from this
                                ridiculous model of disease, addiction and obsession.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img
                            className="object-cover w-24 h-24 rounded-full shadow"
                            src="https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg"
                            alt="Person"
                        />
                        <div className="flex flex-col justify-center mt-2">
                            <p className="text-lg font-bold">Martin Garix Potter</p>
                            <p className="text-sm tracking-wide text-gray-800">
                                Est Schlitz shoreditch fashion axe. Messenger bag cupidatat
                                Williamsburg sustainable aliqua, umami shabby chic artisan duis
                                pickled.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;