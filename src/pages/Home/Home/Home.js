import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Categories from '../Products/Categories';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <Features></Features>
           <Categories></Categories>
        </div>
    );
};

export default Home;