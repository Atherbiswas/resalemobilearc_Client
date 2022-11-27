import { useState } from "react";


// const Hocks=()=>{
//     const [product,setProduct]=useState();

    
//     const catageryHandel= async (category_id)=>{
//     await fetch(`http://localhost:5000/categories/${category_id}`)
//     .then(res=>res.json())
//     .then(data =>{
//         setProduct(data)
//         console.log(data);
//     })
//     };
//     console.log(product)
//     return{
//         product,
//         catageryHandel
//     }
        
    
        
    
// }

// export default Hocks;

const UseHoocks=()=>{
    const [product,setProduct]=useState([]);


    const catageryHandel= async (category_id)=>{
            await fetch(`http://localhost:5000/categories/${category_id}`)
            .then(res=>res.json())
            .then(data =>{
                setProduct(data)
                console.log(data);
            })
        };

        console.log(product);    
    return {
        catageryHandel
    }
}
export default UseHoocks;

