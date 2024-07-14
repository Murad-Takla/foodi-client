import React, { useContext, useEffect, useState } from 'react';
import img from '../../assets/orders-1.jpg'
import Banner from '../../Components/Banner/Banner';
import { AuthContext } from '../../Components/Context/MyContext';
import Spinner from '../../Components/Spinner/Spinner';
import OrderItems from '../../Components/OrderItems/OrderItems';
import { Link, useNavigate } from 'react-router-dom';
import CartIcon from '../../Components/CartIcon/CartIcon';
const Orders = () => {
    const { user, logout } = useContext(AuthContext)
    const email = user?.email
    const title = 'Orders'

    const [orders, setOrders] = useState([])
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate();

    const fetchOrders = () => {
        fetch(`https://foodi-server-two.vercel.app/orders?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('foodi')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logout();
                    navigate('/signIn');
                }
                return res.json()
            })
            .then(data => {
                setOrders(data)
                setLoader(false)
            })
            .catch((err) => console.error(err))
    }
    useEffect(() => {
        fetchOrders()
    }, [email])

    // console.log(orders)
    return (
        <>
            {
                orders.length === 0 ? <>

                    <Link to={'/'} className='grid  lg:flex gap-2 justify-center text-xl font-mono font-semibold'>
                        <h1 >You have not select any food. </h1>
                        <div className=" ">
                            <div className="relative font-semibold text-blue-600 hover:text-red-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                                <span>Click here to order!</span>
                            </div>
                        </div>

                    </Link>
                </> : <>

                    <div className='p-4'>
                        <Banner img={img} title={title}></Banner>
                        {/* <h1 className=" text-2xl font-extrabold text-gray-800 mt-5">Your Orders</h1> */}
                        <h2 className="text-2xl font-extrabold text-gray-800 mt-5 group">
                            Your Orders
                            <div className="bg-[#C72624] h-[2px] w-0 group-hover:w-full transition-all duration-500" />
                        </h2>

                        {
                            loader ? <Spinner></Spinner> : (<>
                                {orders.map(order => <OrderItems fetchOrders={fetchOrders} key={order._id} order={order}></OrderItems>)}
                            </>)
                        }

                    </div>
                </>
            }
        </>
    );
};

export default Orders; 