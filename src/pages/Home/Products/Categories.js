import React, { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://used-products-resale-server-side-livid.vercel.app/categories"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl text-center font-bold">Products Categories</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {categories.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
