import React, { useState } from 'react';
import img from '../../assets/signIn.jpg';
import { Link } from 'react-router-dom';
import Modal from '../../Components/Modal/Modal';

const SignUp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white flex justify-center flex-1">
                <div className="flex-1 text-center hidden lg:flex">
                    <div className="flex items-center">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center max-w-md p-8 space-y-8 rounded-xl mt-10 lg:mt-0">
                    <div className="flex justify-center">
                        <img
                            className="w-12"
                            src="https://foodibd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsmall-logo.c8ee8f2f.png&w=1920&q=75"
                            alt="Logo"
                        />
                    </div>
                    <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">Sign up</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Sign up into your account from here
                    </p>
                    <div className="flex flex-col space-y-4">
                        <button className="w-full flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-6 4v6m0 0a2 2 0 001.5 1.94 2 2 0 002-1.44M15 12H9m0 6v-6M9 12l-6 4.5M3 16l7.89-5.26a2 2 0 012.22 0L21 16"></path>
                            </svg>
                            Sign up with mobile
                        </button>
                        <button
                            onClick={openModal}
                            className="w-full flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0a4 4 0 100-8 4 4 0 000 8zm0 0v8m8-8h-8m8 0v8m0 0h4a2 2 0 002-2V8a2 2 0 00-2-2h-4m0 4v8m0 0a2 2 0 01-2 2h-4a2 2 0 01-2-2V8a2 2 0 012-2h4a2 2 0 012 2v8z"></path>
                            </svg>
                            Sign up with Email
                        </button>
                    </div>
                    <div className="text-center text-sm text-gray-600 mt-4">
                        <span>or</span>
                    </div>
                    <Link to={`/signIn`}>
                        <div className="border border-red-500 p-4 text-center text-sm text-gray-600 mt-2">
                            <h1 className="text-red-500 hover:text-red-700 font-medium">
                                Sign in (User Already Registered)
                            </h1>
                        </div>
                    </Link>
                </div>
            </div>

            {isModalOpen && (<Modal closeModal={closeModal} ></Modal>)}
        </div>
    );
};

export default SignUp;
