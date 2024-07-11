import React from 'react';
import Header from '../Shared/Header/Header';
import HeroSection from '../../Components/HeroSection/HeroSection';
import FeaturesSection from '../../Components/FeaturesSection/FeaturesSection ';
import Items from '../../Components/Items/Items';

const Home = () => {
    return (
        <div>
           
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <Items></Items>
        </div>
    );
};

export default Home;