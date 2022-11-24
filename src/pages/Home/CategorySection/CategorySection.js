import React from 'react';
import Brand from '../../Brand/Brand';
import Categories from '../Products/Categories';

const CategorySection = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-7 bg-yellow-200'>
           <Categories></Categories>
           <Brand></Brand>
        </div>
    );
};

export default CategorySection;