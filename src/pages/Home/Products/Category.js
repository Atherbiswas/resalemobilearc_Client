import React, { useState } from "react";
import { Link } from "react-router-dom";
import Products from "./Products";


const Category = ({ category }) => {
  const { name, img, category_id } = category;
  const [products,setProduct]=useState([])

  const handleProducts = (category_id) => {
    fetch(`http://localhost:5000/categories/${category_id}`)
    .then(res=>res.json())
    .then(data => setProduct(data))
  }
  return (
    <div className="mx-auto mt-4">
        <div className="avatar">
      <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
        <img src={img} alt=""/>
      </div>
    </div>
      <div className="text-center mt-2"> 
      <p className="text-xl font-semibold">{name}</p>
      <Link to={`/categories/${category.category_id}`}><button className="btn btn-xs" onClick={() => handleProducts(category.category_id)}>See All products</button></Link>
      </div>
    </div>
  );
};

export default Category;
