import React, { useContext, useEffect, useState } from 'react';
import img from '../../assets/orders-1.jpg'
import Banner from '../../Components/Banner/Banner';
import { AuthContext } from '../../Components/Context/MyContext';
import Spinner from '../../Components/Spinner/Spinner';
import OrderItems from '../../Components/OrderItems/OrderItems';
const Orders = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email
    const title = 'Orders'

    const [orders, setOrders] = useState([])
    const [loader, setLoader] = useState(true)
    const fetchOrders = () => {
        fetch(`http://localhost:3000/orders?email=${email}`)
            .then(res => res.json())
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
        <div className='p-4'>
            <Banner img={img} title={title}></Banner>
            <h1 className=" text-2xl font-extrabold text-gray-800 mt-5">Your Orders</h1>

            {
                loader ? <Spinner></Spinner> : (<>
                    {orders.map(order => <OrderItems fetchOrders={fetchOrders} key={order._id} order={order}></OrderItems>)}
                </>)
            }

        </div>
    );
};

export default Orders; <h2>This is order Page</h2>