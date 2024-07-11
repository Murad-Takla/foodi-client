import React from 'react';
import checkout from '../../assets/checkout.jpg'
const Banner = ({img , title}) => {
    return (
        <div className="relative h-[500px] mx-auto rounded-md">
            <img
                src={img}
                alt="image"
                className="rounded h-full w-full  object-cover object-center  "
            />
            <div className="absolute top-[350px] lg:top-[350px] left-6 max-w-full md:left-20">

                <div className="rounded text-5xl  bg-[#d2bfbf] lg:text-7xl font-bold text-black mix-blend-screen px-10 py-5 ">
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;