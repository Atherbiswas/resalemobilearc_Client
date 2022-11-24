import React from 'react';
import Brand from '../../Brand/Brand';
import Categories from '../Products/Categories';

const CategorySection = () => {
    return (
        <div className='mt-7'>
            <h2 className='text-3xl text-center font-bold'>Brand & Products Category</h2>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 bg-yellow-200 mt-3'>
           <Categories></Categories>
           <Brand></Brand>
        </div>
        </div>
    );
};

export default CategorySection;