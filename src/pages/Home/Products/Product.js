import React from "react";

const Product = ({ product, setEachProduct }) => {
  const {
    name,
    image,
    location,
    original_price,
    resale_price,
    seller_Name,
    used,
    Post_Time,
  } = product;
  return (
    <div className="card lg:w-96 bg-base-100 shadow-2xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold">Original Price: {original_price}</p>
        <p className="font-semibold">Resale Price: {resale_price}</p>
        <p className="font-semibold">Used: {used}</p>
        <p className="font-semibold">Seller Name: {seller_Name}</p>
        <p className="font-semibold">Location: {location}</p>
        <p className="font-semibold">Post Time: {Post_Time}</p>
        <div className="card-actions">
          <label onClick={()=>setEachProduct(product)}
           htmlFor="booking-modal" className="btn btn-warning">Book Now</label>
        </div>
      </div>
    </div>
  );
};

export default Product;
