import React from "react";

const Bid = ({ id, img, time, bid, btn }) => {
  // console.log(img);
  return (
    <div key={id} className="">
      <div className="mt-4 mr-5 relative md:mt-8 lg:mt-8">
        <img
          src={img}
          alt="bid img"
          className="rounded-xl w-[58vh] md:w-[33vh] lg:w-[53vh]"
        />
      </div>
      <div
        className={` ${
          id == 2
            ? "md:top-[61vh] lg:top-[78vh]"
            : "md:top-[35vh] lg:top-[40vh]"
        } absolute z-40 top-[38vh] flex flex-col items-center text-[#fff]`}
      >
        <div className="flex justify-around items-center mx-5 md:mx-2 bg-[#00000021] w-[50vh] h-[15vh] md:w-[30vh] md:h-[8vh] lg:w-[50vh] lg:h-[10vh] rounded-lg backdrop-blur-md">
          <div>
            <span>{time}</span>
            <p className="text-sm">Time Remaining</p>
          </div>
          <div>
            <span>{bid}</span>
            <p className="text-sm">Highest Bid</p>
          </div>
        </div>
        <div>
          <button className="bg-[#090D2F] w-[50vh] md:w-[30vh] lg:w-[50vh] mt-2 rounded-md text-sm font-normal py-1.5">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bid;
