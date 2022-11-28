import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Product from './Product';


const Products = () => {
const [Products , setProducts]=useState([])
   const [eachProduct , setEachProduct] = useState(null);
   const a = useParams()
   

   useEffect( () => {
    fetch(`http://localhost:5000/categories/${a.id}`)
      .then(res=>res.json())
      .then(data =>{
        setProducts(data)
      })
   },[])

    return (
        <div className='mx-5'>
            <h1 className='text-3xl font-bold'>This category has total product: {Products?.length} </h1>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 my-5'>
                {
                    Products?.map(product => <Product
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
                setEachProduct={setEachProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;