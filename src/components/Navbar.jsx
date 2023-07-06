import React from "react";
import { AiOutlineDown, AiOutlineSearch, AiTwotoneBell } from "react-icons/ai";
import img1 from "../assets/unsplash_pmACe385Ruo.png";

const Navbar = () => {
  return (
    <section className="fixed w-[90%] top-2 text-white flex items-center justify-between ml-[10%] z-200 md:ml-[4vh] lg:ml-[12%] lg:top-2 ">
      <div className="flex items-center">
        {/* <AiOutlineSearch /> */}
        <input
          type="search"
          placeholder="Search by creator or collection"
          className="bg-[#080b2a57] placeholder-[#A1A5B6] rounded-full px-6 py-2 w-[70vh] text-base md:w-[85%] md:absolute md:mt-[24%] md:left-[16%] lg:absolute lg:mt-[20%] lg:w-[80%] lg:max-w-[60vh] lg:ml-[4%]"
        />
      </div>
      <div className="flex gap-4 text-[#FFF] text-sm md:gap-2 lg:gap-[5%]">
        <div
          className="bg-[#080b2a57] rounded-2xl min-w-[16vh] p-2 lg:py-3
        lg:min-w-[10vh]"
        >
          <span className="text-sm flex items-center justify-center">
            $ 3,25 ETH
          </span>
        </div>
        <div className="bg-[#080b2a57] rounded-2xl items-center justify-center min-w-[6vh] h-auto p-2 px-auto lg:py-3  lg:min-w-[3vh]">
          <AiTwotoneBell className="text-[#373C70] text-xl" />
        </div>
        <div>
          <button className="rounded-2xl bg-[#080b2a57] items-center justify-center min-w-[12vh] p-2 lg:py-3  lg:min-w-[10vh]">
            Create
          </button>
        </div>
        <div className="flex items-center">
          <button className="rounded-2xl bg-[#080b2a57] items-center justify-center min-w-[12vh] p-2 lg:py-3  lg:min-w-[10vh]">
            Collect
          </button>
        </div>
      </div>
      <div className="flex items-center mt-2 lg:ml-auto relative pl-[5%] lg:pl-[7%] md:pl-[12%]">
        <div className="absolute top-1 left-0  md:top-0">
          <img src={img1} className="w-10 h-10" alt="profile img" />
        </div>
        <div className="">
          <span>Vishal Birla</span>
          <p className="text-[#FFF] ">vishalbirla@gmail.com</p>
        </div>
        <div className="ml-6 mr-2 md:hidden">
          <AiOutlineDown />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
