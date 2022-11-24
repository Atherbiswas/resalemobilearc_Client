import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { name, img } = category;
  return (
    <div className="mx-auto mt-4">
        <div className="avatar">
      <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
        <img src={img} alt=""/>
      </div>
    </div>
      <div className="text-center mt-2"> 
      <p className="text-xl font-semibold">{name}</p>
      <Link><button className="btn btn-xs">See All products</button></Link>
      </div>
    </div>
  );
};

export default Category;
