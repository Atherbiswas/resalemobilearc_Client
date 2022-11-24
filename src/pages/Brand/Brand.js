import React from "react";
import img1 from '../../asstes/realme.jpeg';
import img2 from '../../asstes/oppo.jpg';
import img3 from '../../asstes/redmi.png';
import img4 from '../../asstes/samsung.jpg';
import img5 from '../../asstes/symphoney.png'

const Brand = () => {
  return (
    <div>
      <div className="carousel lg:w-4/5 w-full  mx-auto">
        <div id="item1" className="carousel-item w-full">
          <img src={img1} className="w-full h-48" alt=""/>
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={img2} className="w-full h-48" alt=""/>
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={img3} className="w-full h-48" alt=""/>
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={img4} className="w-full h-48" alt=""/>
        </div>
        <div id="item5" className="carousel-item w-full">
          <img src={img5} className="w-full h-48" alt=""/>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
        <a href="#item5" className="btn btn-xs">
          5
        </a>
      </div>
    </div>
  );
};

export default Brand;
