import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import checkout from '../../assets/checkout.jpg' 
import ItemForm from '../../Components/ItemForm/ItemForm';
import { AuthContext } from '../../Components/Context/MyContext';
const CheckoutPage = () => {
   
    const  title = 'Checkout'
    const itemData= useLoaderData()
    return (
        <div className='px-4'>
        <Banner img={checkout} title={title}></Banner>
        <ItemForm itemData={itemData}></ItemForm>
        </div>
    );
};

export default CheckoutPage;