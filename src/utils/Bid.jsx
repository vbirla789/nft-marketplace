import React from "react";

const Bid = ({ id, img, time, bid, btn }) => {
  // console.log(img);
  return (
    <div key={id} className="relative">
      <div className="mt-4 mr-5 md:mt-8 lg:mt-8">
        <img
          src={img}
          alt="bid img"
          className="rounded-xl w-[58vh] md:w-[95%] lg:w-[53vh]"
        />
      </div>
      <div
        className={` ${
          id == 2 ? "md:top-[58%] " : "md:top-[58%] "
        } absolute z-40 top-[40%] flex flex-col items-center text-[#fff] lg:top-[45%] md:w-[90%]`}
      >
        <div className="flex justify-around items-center mx-5 bg-[#00000021] w-[50vh] h-[15vh] md:mx-0 md:w-[90%] md:h-[10vh] lg:w-[50vh] lg:h-[10vh] rounded-lg backdrop-blur-md lg:mx-2">
          <div>
            <span>{time}</span>
            <p className="text-sm">Time Remaining</p>
          </div>
          <div>
            <span>{bid}</span>
            <p className="text-sm">Highest Bid</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="bg-[#090D2F] w-[50vh] md:w-[90%] lg:w-[50vh] mt-2 rounded-md text-sm font-normal py-1.5">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bid;
