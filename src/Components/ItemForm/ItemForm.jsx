import React from 'react';

const ItemForm = ({ itemData }) => {
    const { price, strCategory, _id } = itemData
    return (
        <div className="bg-white  border-4 rounded-lg shadow relative m-10">
            <div className="flex items-start justify-between p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold">{strCategory}</h3>

            </div>
            <div className="p-6 space-y-6">
                <form action="#">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="firstName"
                                className="text-sm font-medium text-gray-900 block mb-2"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="your first name . ."
                                required=""
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="firstName"
                                className="text-sm font-medium text-gray-900 block mb-2"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="your last name . ."
                                required=""
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="phone"
                                className="text-sm font-medium text-gray-900 block mb-2"
                            >
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="Mobile . ."
                                required=""
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-gray-900 block mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                defaultValue={'email'}
                               readOnly
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="price"
                                className="text-sm font-medium text-gray-900 block mb-2"
                            >
                                Price
                            </label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                defaultValue={price}
                                readOnly
                            />
                        </div>
                        <div className="col-span-full">
                            <label
                                htmlFor="order-details"
                                className="text-sm font-medium text-gray-900 block mb-2"
                            >
                                Order Details
                            </label>
                            <textarea
                                name='order-details'
                                id="order-details"
                                rows={6}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                                placeholder="Details"
                                defaultValue={""}
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className="p-6 border-t border-gray-200 rounded-b">
                <button
                    className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    type="submit"
                >
                    Save all
                </button>
            </div>
        </div>

    );
};

export default ItemForm;