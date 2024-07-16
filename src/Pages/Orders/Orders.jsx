import React, { useContext, useEffect, useState } from 'react';
import img from '../../assets/orders-1.jpg'
import Banner from '../../Components/Banner/Banner';
import { AuthContext } from '../../Components/Context/MyContext';
import Spinner from '../../Components/Spinner/Spinner';
import OrderItems from '../../Components/OrderItems/OrderItems';
import { Link, useNavigate } from 'react-router-dom';
import CartIcon from '../../Components/CartIcon/CartIcon';
import toast from 'react-hot-toast';
const Orders = () => {
    const { user, logOut } = useContext(AuthContext)
    const email = user?.email
    const title = 'Orders'

    const [orders, setOrders] = useState([])
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate();

    const fetchOrders = () => {
        fetch(`https://foodi-server-two.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('foodi')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {

                    return logOut();
                   
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

  
    return (
        <>
            <div className='p-4'>  <Banner img={img} title={title}></Banner></div>
            {
                orders.length === 0 ? <>
                    <div className="flex flex-col justify-center items-center my-10">
                        <div className="text-center">
                            <p className="text-xl font-bold mb-4">You have no orders.</p>
                            <Link to="/" className="font-bold font-serif  text-blue-500 underline">
                                Click here to Order food !
                            </Link>
                        </div>
                    </div>
                </> : <>

                    <div className='p-4'>


                        <h2 className="text-2xl font-extrabold text-gray-800 mt-5 group">
                            Your Orders : {orders.length}
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