import React, { useContext } from 'react';
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from '../../../Components/Context/MyContext';
import CartIcon from '../../../Components/CartIcon/CartIcon';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const logoutHandler = () => {
       
        logOut()

    }
    return (
        <div>
            <div>
                <div className="w-full flex p-4 items-center justify-between">
                    <Link to={`/`}>
                        <div className="relative logo">
                            <img
                                alt="Logo"
                                loading="lazy"
                                width="1430"
                                height="564"
                                decoding="async"
                                src="https://foodibd.com/_next/static/media/logo.c6a0f759.svg"
                                className="w-[50px] h-[50px]object-fill"
                            />
                        </div>
                    </Link>
                    <div className="hidden lg:block"></div>
                    <>
  
 
  
</>

                    <div className="flex items-center space-x-4 md:space-x-5 ">
                        <ul className="flex items-center space-x-3 md:space-x-4 list-none">
                            <li></li>
                            <li>
                                <button className="p-0 bg-transparent text-gray-800 border-0 shadow-none nav-cart-btn">
                                    <i className="pi pi-shopping-cart relative text-xl">
                                        <span className="absolute inset-0"></span>
                                    </i>
                                </button>
                            </li>
                        </ul>
                        <div className="flex gap-2 items-center ">
                            {
                                user?.email && <CartIcon ></CartIcon>
                            }
                            {
                                user?.email ? <><button
                                    onClick={logoutHandler}
                                    className="border border-primary-600 text-primary-600 font-semibold bg-white w-20 h-8 flex items-center justify-center rounded no-underline transition duration-500 hover:bg-red-100"

                                >
                                    Log out
                                </button></> : <><Link to={`/signIn`}
                                    className="border border-primary-600 text-primary-600 font-semibold bg-white w-20 h-8 flex items-center justify-center rounded no-underline transition duration-500 hover:bg-red-100"

                                >
                                    Sign in
                                </Link></>
                            }
                            <Link to={`/signUp`}
                                className="bg-[#DC3545] flex items-center justify-center rounded w-20 h-8 text-white font-semibold"

                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;