import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Product from './Product';


const Products = () => {
   const Products=JSON.parse(localStorage.getItem('b')) 
   const [eachProduct , setEachProduct] = useState(null);
   console.log(Products);
    
    return (
        <div className='mx-5'>
            <h1 className='text-3xl font-bold'>This category has total product: {Products.length} </h1>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 my-5'>
                {
                    Products.map(product => <Product
                    key={product._id}
                    product={product}
                    setEachProduct={setEachProduct}
                    ></Product>)
                }
            </div>
            {
                eachProduct &&
                <BookingModal 
                eachProduct={eachProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;