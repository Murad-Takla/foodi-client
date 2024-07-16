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

                                {
                                    orderInfo.strCategoryThumb ? <> <img
                                        src={orderInfo.strCategoryThumb}
                                        className="w-full h-full object-contain" /> </> : <div className='w-full h-full  flex justify-center items-center' >
                                        <span className="loading loading-ring loading-lg "></span>
                                    </div>
                                }


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
                            className="svg-icon cursor-pointer w-6 hover:w-8"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 1011.2a496.384 496.384 0 0 0 448.3072-279.296 38.4 38.4 0 0 0-68.9664-33.8944A420.0448 420.0448 0 0 1 512 934.4c-232.9088 0-422.4-189.4912-422.4-422.4S279.0912 89.6 512 89.6s422.4 189.4912 422.4 422.4a38.4 38.4 0 0 0 76.8 0c0-275.2512-223.9488-499.2-499.2-499.2S12.8 236.7488 12.8 512s223.9488 499.2 499.2 499.2z" fill="#438CFF" /><path d="M760.4224 537.6a38.4 38.4 0 0 0-38.4-38.4h-460.8a38.4 38.4 0 0 0 0 76.8h460.8a38.4 38.4 0 0 0 38.4-38.4zM261.2224 378.8288h307.2a38.4 38.4 0 0 0 0-76.8h-307.2a38.4 38.4 0 0 0 0 76.8zM261.2224 696.3712a38.4 38.4 0 0 0 0 76.8h204.8a38.4 38.4 0 0 0 0-76.8h-204.8z" fill="#438CFF" /><path d="M711.5776 340.4288m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z" fill="#438CFF" /></svg>
                               
                                <svg

                                    onClick={() => deleteOrderHandler(order._id)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 cursor-pointer fill-red-600   inline-block hover:w-8"
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