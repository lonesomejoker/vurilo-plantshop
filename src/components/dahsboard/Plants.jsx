import React from "react";
import { Avatar, Input } from "antd";
import { PiWindowsLogo } from "react-icons/pi";
import { TbScreenshot } from "react-icons/tb";
import { PiPaintBrushBroad } from "react-icons/pi";
import "./Plants.css";
import { useState } from "react";
import Slider from "react-slick";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

const Plants = () => {

  const [imageIndex, setImageIndex] = useState(0);
  const items=useSelector((state)=>state.allCart.items);
  const dispatch=useDispatch();

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className=" py-3">
      <div className=" flex justify-between px-3">
        <div className=" flex gap-1.5">
          <h1>
            <Avatar className=" h-6 w-6">
              <PiWindowsLogo />
            </Avatar>
          </h1>
          <h1>
            <Avatar className=" h-6 w-6">
              <TbScreenshot />
            </Avatar>
          </h1>
          <h1>
            <Avatar className=" h-6 w-6">
              <PiPaintBrushBroad />
            </Avatar>
          </h1>
        </div>
        
        <div>
          <Input className=" w-28 h-9 rounded-3xl bg-gray-200 border-none bg-opacity-35 
          backdrop-blur" placeholder="Search"></Input>
        </div>
      </div>
      <div className=" max-w-[900px] mx-auto">
        <Slider {...settings}>
          {items.map((item, idx) => {
            return (
              <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={idx}>
                <img src={item.image} alt="plants" className=" h-60"/>
                <h1 className=" text-center text-white font-varela">
                  {item.name}
                </h1>
                <h1 className=" text-center text-white font-varela">
                  ${item.price}
                </h1>
                <div className=" flex justify-center pt-2">
                  <button className=" bg-slate-200 backdrop-blur bg-opacity-50 rounded-3xl 
                    px-4 py-3 font-varela" onClick={()=>dispatch(addToCart(item))}>
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
        
      </div>
    
    </div>
  );
};

export default Plants;
