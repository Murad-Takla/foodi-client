import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import checkout from '../../assets/checkout.jpg' 
import ItemForm from '../../Components/ItemForm/ItemForm';
const CheckoutPage = () => {
    const  title = 'Checkout'
    const itemData= useLoaderData()
    return (
        <>
        <Banner img={checkout} title={title}></Banner>
        <ItemForm itemData={itemData}></ItemForm>
        </>
    );
};

export default CheckoutPage;