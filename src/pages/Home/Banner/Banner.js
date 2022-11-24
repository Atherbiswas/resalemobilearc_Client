import React from "react";

const Banner = () => {
  return (
    <div
      className="hero h-96 rounded-md  bg-[url('/src/asstes/banner-0.jpg')]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold">Buy & Sell  Near You</h1>
          <p className="lg:text-2xl mb-3 font-semibold"> "Here you can buy and sell used mobile phone on value for money"</p>
          <button className="btn btn-outline btn-warning mx-2">Buy Now</button>
          <button className="btn btn-outline btn-warning">Sell Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
