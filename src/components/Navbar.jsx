import React from "react";
import { AiOutlineDown, AiOutlineSearch, AiTwotoneBell } from "react-icons/ai";
import img1 from "../assets/unsplash_pmACe385Ruo.png";

const Navbar = () => {
  return (
    <section className="fixed top-2 text-white flex items-center gap-x-[10%] ml-[10%] z-200 md:ml-[35px] md:top-3 lg:ml-[6%]">
      <div className="flex items-center gap-2">
        {/* <AiOutlineSearch /> */}
        <input
          type="search"
          placeholder="Search by creator or collection"
          className="bg-[#080b2a57] placeholder-[#A1A5B6] rounded-full px-6 py-2 w-[70vh] text-base md:w-[32vh] md:absolute md:top-[7vh] md:left-[5vh] lg:absolute lg:top-[6vh] lg:w-[40vh]"
        />
      </div>
      <div className="flex gap-4 text-[#FFF] text-sm md:gap-2 lg:gap-[3vh]">
        <div className="bg-[#080b2a57] rounded-2xl w-[18vh] md:w-[10vh] lg:w-[10vh]">
          <span className="text-sm flex items-center justify-center mt-3">
            $ 3,25 ETH
          </span>
        </div>
        <div className="bg-[#080b2a57] rounded-2xl items-center justify-center px-2 py-2 h-[7vh] md:h-[5vh] lg:h-[4vh]  md:py-3 lg:pt-3">
          <AiTwotoneBell className="text-[#373C70] text-xl" />
        </div>
        <div>
          <button className="rounded-2xl bg-[#080b2a57] px-4 items-center justify-center h-[7vh] md:h-[5vh] lg:h-[4vh]">
            Create
          </button>
        </div>
        <div className="flex items-center">
          <button className="rounded-2xl bg-[#080b2a57] px-4 items-center justify-center h-[7vh] md:h-[5vh] lg:h-[4vh]">
            Collect
          </button>
        </div>
      </div>
      <div className="relative flex items-center">
        <div>
          <img
            src={img1}
            className="w-10 h-10 absolute top-3 md:right-[68vh] lg:right-[58vh] right-[31vh]"
            alt="profile img"
          />
        </div>
        <div className="ml-[20%] mt-2">
          <span>Vishal Birla</span>
          <p className="text-[#FFF]">vishalbirla@gmail.com</p>
        </div>
        <div className="ml-8">
          <AiOutlineDown />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
