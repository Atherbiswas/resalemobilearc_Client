import React from 'react';
import Banner from '../Banner/Banner';
import CategorySection from '../CategorySection/CategorySection';
import Features from '../Features/Features';


const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <Features></Features>
           <CategorySection></CategorySection>
        </div>
    );
};

export default Home;