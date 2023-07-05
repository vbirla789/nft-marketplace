import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Nft = ({ id, img, name, logo, title, desc, price, bid }) => {
  return (
    <div className="w-[5vh] lg:w-[2vh] mr-10 h-[45vh]" key={id}>
      <div>
        <img src={img} className="absolute -z-40 md:w-[32vh]" />
      </div>
      <div className="flex p-2 justify-between items-center w-[50vh] md:w-[32vh] md:p-3 lg:w-[78vh] lg:p-4">
        <h1>{name}</h1>
        <span>
          <AiOutlineHeart />
        </span>
      </div>
      <div className="bg-[#0000001a] backdrop-blur-md flex items-center absolute top-[70%] rounded-lg gap-x-3 text-base md:w-[32vh] md:top-[80%] lg:top-[60%] w-[48vh] left-2">
        <div>
          <img src={logo} />
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
