import React, {  useState } from "react";
import { Link } from "react-router-dom";


const Category = ({ category }) => {
  const { name, img} = category;


   const catageryHandel= (category_id)=>{
       fetch(`http://localhost:5000/categories/${category_id}`)
      .then(res=>res.json())
      .then(data =>{
        localStorage.setItem('b',JSON.stringify(data));
        window.location.reload(true);
      })
   };

 
  return (
    <div className="mx-auto mt-4">
        <div className="avatar">
      <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
        <img src={img} alt=""/>
      </div>
    </div>
      <div className="text-center mt-2"> 
      <p className="text-xl font-semibold">{name}</p>
      <button className="btn btn-xs" onClick={() =>catageryHandel(category.category_id)}><Link to={`/categories/${category.category_id}`}>See All products</Link></button>
      </div>
    </div>
  );
};

export default Category;