import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetails = ({ item }) => {

    const { _id, strCategory, strCategoryThumb, price } = item
    return (
        <div className="my-5  border bg-[#FFFAFA] rounded-lg  hover:shadow-lg ">
            <div>

                {
                    strCategoryThumb ? <> <img
                        className="w-full"
                        src={strCategoryThumb}
                        alt="Product Image"
                    /></> : <div className='w-full h-full  flex justify-center items-center' >
                        <span className="loading loading-ring loading-lg "></span>
                    </div>
                }
            </div>
            <div className="p-4 mt-10 mb-5 ">
                <h3 className="text-2xl font-bold  mb-2">{strCategory}</h3>

                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-gray-500">${price}</span>

                    <Link to={`/items/${_id}`}>
                        <button
                            className="bg-[#E20001] hover:bg-[#EE484C] text-white font-bold py-2 px-4 rounded">
                            Order Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default ItemDetails;

