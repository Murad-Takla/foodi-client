import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const OrderItems = ({ order, fetchOrders }) => {
    // console.log(order)
    const { details, category } = order
    const [orderInfo, setOrderInfo] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState({ category: '', details: '' });
    useEffect(() => {
        fetch(`https://foodi-server-two.vercel.app/items/${order.order}`)
            .then(res => res.json())
            .then(data => setOrderInfo(data))
    }, [order])
    const deleteOrderHandler = (id) => {

        const agree = window.confirm(`Are you sure to delete ${order.category}`)
        if (agree) {
            fetch(`https://foodi-server-two.vercel.app/orders/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success(`${order.category} Successfully deleted!`);
                        fetchOrders();  // Re-fetch orders after deletion
                    }
                });
        }

    }
    const handleDetailsClick = () => {
        setShowModal(true)
        setModalContent({ category, details })

    }
    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <div className="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">

            <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="md:col-span-2 space-y-4">
                    <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
                        <div className="flex gap-4">
                            <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                                <img
                                    src={orderInfo.strCategoryThumb}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h3 className="text-base font-bold text-gray-800">
                                        {order.customer}
                                    </h3>
                                    <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">

                                        {order.category}
                                    </p>
                                </div>
                                <div className="mt-auto flex font-bold text-gray-400">
                                    <p>Phone: <span> {order.Mobile}</span> </p>
                                </div>
                            </div>
                        </div>
                        <div className="ml-auto flex flex-col ">
                            <div className="flex  gap-4 justify-end items-center ">
                                <svg
                                    onClick={handleDetailsClick}
                                    className="w-4 cursor-pointer fill-gray-400 inline-block"
                                    viewBox="0 0 20 20"
                                    version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <path d="M0 0 C3.5 0.25 3.5 0.25 5.5 2.25 C5.9140625 4.6328125 5.9140625 4.6328125 6.125 7.375 C6.19976562 8.28507812 6.27453125 9.19515625 6.3515625 10.1328125 C6.40054687 10.83148438 6.44953125 11.53015625 6.5 12.25 C4.87419034 12.13601335 3.24932843 12.00844341 1.625 11.875 C0.72007813 11.80539063 -0.18484375 11.73578125 -1.1171875 11.6640625 C-3.5 11.25 -3.5 11.25 -5.5 9.25 C-5.75 5.75 -5.75 5.75 -5.5 2.25 C-3.5 0.25 -3.5 0.25 0 0 Z M0.5 3.25 C0.5 4.24 0.5 5.23 0.5 6.25 C-0.49 6.58 -1.48 6.91 -2.5 7.25 C-0.025 7.745 -0.025 7.745 2.5 8.25 C2.17 6.6 1.84 4.95 1.5 3.25 C1.17 3.25 0.84 3.25 0.5 3.25 Z " fill="#CDD1D7" transform="translate(17.5,11.75)" />
                                    <path d="M0 0 C5.28 0 10.56 0 16 0 C16 2.97 16 5.94 16 9 C15.34 9 14.68 9 14 9 C14 6.69 14 4.38 14 2 C10.04 2 6.08 2 2 2 C2 7.28 2 12.56 2 18 C3.65 18 5.3 18 7 18 C7.33 18.66 7.66 19.32 8 20 C5.36 20 2.72 20 0 20 C0 13.4 0 6.8 0 0 Z " fill="#9ca3af" transform="translate(4,2)" />
                                    <path d="M0 0 C2.64 0 5.28 0 8 0 C8 0.66 8 1.32 8 2 C5.36 2 2.72 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="##9ca3af" transform="translate(8,7)" />
                                    <path d="M0 0 C1.98 0 3.96 0 6 0 C5.67 0.66 5.34 1.32 5 2 C3.35 2 1.7 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#9ca3af" transform="translate(8,11)" />
                                    <path d="M0 0 C0.99 0 1.98 0 3 0 C3 0.66 3 1.32 3 2 C2.01 2 1.02 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#CDD1D7" transform="translate(8,15)" />
                                </svg>
                                <svg

                                    onClick={() => deleteOrderHandler(order._id)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 cursor-pointer fill-gray-400 inline-block"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                        data-original="#000000"
                                    />
                                    <path
                                        d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                        data-original="#000000"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-base font-bold text-gray-800 mt-auto">${order.price}</h3>
                        </div>
                    </div>


                </div>

            </div>

            {showModal && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Yours Order: {modalContent.category}</h3>
                        <p className="py-4 font-semibold">Details : <span className='text-gray-500'>{modalContent.details}</span></p>
                        <div className="modal-action">
                            <button onClick={closeModal} className="btn btn-circle btn-outline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default OrderItems;