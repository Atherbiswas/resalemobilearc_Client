import React from 'react';
import { FiRefreshCcw } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaLock, FaGift } from 'react-icons/fa';


const Features = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-4xl font-bold text-center'>Features</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-3'>
            <div className='bg-teal-200 w-full rounded p-2'>
                <FiRefreshCcw className='mx-auto text-6xl'></FiRefreshCcw>
                <h2 className='text-2xl font-semibold text-center'>5 days return</h2>
            </div>
            <div className='bg-indigo-200 w-full rounded p-2'>
                <CiDeliveryTruck className='mx-auto text-6xl'></CiDeliveryTruck>
                <h2 className='text-2xl font-semibold text-center'>Low cost Shipping</h2>
            </div>
            <div className='bg-violet-200 w-full rounded p-2'>
                <FaLock className='mx-auto text-6xl'></FaLock>
                <h2 className='text-2xl font-semibold text-center'>Secure Payment</h2>
            </div>
            <div className='bg-fuchsia-200 w-full rounded p-2'>
                <FaGift className='mx-auto text-6xl'></FaGift>
                <h2 className='text-2xl font-semibold text-center'>Daily New product add</h2>
            </div>
        </div>
        </div>
    );
};

export default Features;