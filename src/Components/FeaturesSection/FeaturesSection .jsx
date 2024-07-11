import React from 'react';

const FeaturesSection = () => {
    return (
        <div className="mx-0 py-8 grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#FFFAFA] ">
            <div className="col-span-1 md:col-span-1">
                <div className="w-full flex flex-col items-center gap-4 p-5">
                    <div className="relative w-24 h-24">
                        <img
                            alt="Super fast Delivery"
                            loading="lazy"
                            decoding="async"
                            src="https://foodibd.com/_next/static/media/delivery.be81f682.svg"
                            className="absolute inset-0 h-full w-full object-contain"
                        />
                    </div>
                    <div className="flex flex-col text-center gap-1">
                        <h6>Super fast Delivery</h6>
                        <p className="text-gray-700">
                            Faster than your cravings can blink. Experience the super-fast delivery and get fresh food.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 md:col-span-1">
                <div className="w-full flex flex-col items-center gap-4 p-5">
                    <div className="relative w-24 h-24">
                        <img
                            alt="Live Order Tracking"
                            loading="lazy"
                            decoding="async"
                            src="https://foodibd.com/_next/static/media/location.bf59f976.svg"
                            className="absolute inset-0 h-full w-full object-contain"
                        />
                    </div>
                    <div className="flex flex-col text-center gap-1">
                        <h6>Live Order Tracking</h6>
                        <p className="text-gray-700">
                            Track your order while it is delivered to your doorstep from the restaurant.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 md:col-span-1">
                <div className="w-full flex flex-col items-center gap-4 p-5">
                    <div className="relative w-24 h-24">
                        <img
                            alt="Your Favorite Restaurants"
                            loading="lazy"
                            decoding="async"
                            src="https://foodibd.com/_next/static/media/mobile.73da0fee.svg"
                            className="absolute inset-0 h-full w-full object-contain"
                        />
                    </div>
                    <div className="flex flex-col text-center gap-1">
                        <h6>Your Favorite Restaurants</h6>
                        <p className="text-gray-700">
                            Find the best and nearest top your favorite restaurants from your selected location.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
