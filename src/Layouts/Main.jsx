import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Home from '../Pages/Home/Home';

const Main = () => {
    return (
        <div className='container mx-auto min-h-screen  flex flex-col '>
           <Header></Header>
            <div className='flex-grow'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;