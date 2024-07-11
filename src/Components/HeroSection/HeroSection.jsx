import React from 'react';

const HeroSection = () => {
    return (
        <div className=" hero bg-[#FFFAFA]">
            <div className="grid  lg:grid-cols-2 p-4">

                <div className='flex flex-col justify-evenly sm:mb-5'>
                    <h1 className="text-5xl font-bold text-[#E10101]">Fast, Fresh</h1>
                    <h1 className="font-bold text-5xl"><strong className="text-[#E10101] font-bold">&amp; Right</strong> To Your Door</h1>
                    <h6 className='text-gray-500 my-5 lg:my-0'>
                        Order dishes from favorite restaurants near you.
                    </h6>
                    <button className="btn w-1/4 bg-[#E10101] mt-5 lg:mt-0 text-white font-bold hover:bg-[red]">Explore items</button>
                </div>
                <div className='flex justify-center'>
                    <img
                        className='w-1/2'
                        src="https://foodibd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-2.15d15703.png&w=1920&q=75"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;