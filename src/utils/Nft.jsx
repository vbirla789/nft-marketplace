import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Nft = ({ id, img, name, logo, title, desc, price, bid }) => {
  return (
    <div key={id} className="relative">
      <div>
        <img src={img} className="md:w-[32vh] w-[45vh]" />
      </div>
      <div className="flex p-2 m-x-2 gap-x-[45%] items-center w-[50vh] md:p-3 lg:p-2 absolute top-[1%] z-10 md:w-full">
        <h1>{name}</h1>
        <span>
          <AiOutlineHeart />
        </span>
      </div>
      <div className="bg-[#0000001a] backdrop-blur-md flex items-center top-[70%] rounded-lg gap-x-2 text-base md:w-[27vh] md:top-[50%] lg:mx-[1px] w-[42vh] left-[3%] absolute py-1">
        <div className="ml-2">
          <img src={logo} className="w-[10vh] h-auto lg:w-[6vh] md:w-[5vh]" />
        </div>
        <div>
          <p>{title}</p>
          <span className="text-[#5EEAD4]">{price}</span>
        </div>
        <div>
          <p>{desc}</p>
          <span className="text-[#5EEAD4] opacity-80">{bid}</span>
        </div>
      </div>
    </div>
  );
};

export default Nft;
