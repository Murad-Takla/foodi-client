import React, { useContext } from 'react';
import { AuthContext } from '../Context/MyContext';
import toast from 'react-hot-toast';

const ItemForm = ({ itemData }) => {
    // const { price, strCategory, _id } = itemData
    const { user } = useContext(AuthContext)

    // console.log(itemData, user)
    const checkoutFormHandler = (event) => {
        event.preventDefault()
        const form = event.target

        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || 'not registered yet'
        const price = itemData.price
        const details = form.orderDetails.value
        const phone = form.phone.value

        const order = {
            order: itemData._id,
            category: itemData.strCategory,
            customer: name,
            email,
            price,
            details,
            Mobile: phone
        }
        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset()
                toast.success('Your order in confirmed')
            })

    }
    return (
        <div className="bg-white  border-2 border-red-500 rounded-lg shadow relative m-10">
            <div className="flex items-start justify-between p-5 border-b rounded-t">
                <h3 className="text-2xl font-bold text-[#DC3545] ">Food name name : {itemData.strCategory}</h3>

            </div>
            <div className="p-6 space-y-6">
                <form
                    onSubmit={checkoutFormHandler}>
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
                                required
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="lastName"
                                className="text-sm font-medium text-gray-900 block mb-2"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="your last name . ."
                                required
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
                                required
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
                                defaultValue={`${user?.email}`}
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
                                defaultValue={itemData.price}
                                readOnly
                                required
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
                                required
                                name='orderDetails'
                                id="orderDetails"
                                rows={6}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                                placeholder="Details"

                            />
                        </div>
                    </div>
                    <div className="py-5 border-t border-gray-200 rounded-b">
                        <button
                            className="text-white bg-[#DC3545] hover:bg-[#E62626] focus:ring-4 
                     font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            type="submit"
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </div>

        </div>

    );
};

export default ItemForm;