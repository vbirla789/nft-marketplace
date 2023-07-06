import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React from "react";
import Nft from "../utils/Nft";

const button = [
  { name: "All" },
  { name: "Music" },
  // { name: "3D Abstract" },
  { name: "Game" },
  // { name: "Sports" },
  // { name: "Cartoon" },
  // { name: "Virtual World" },
  { name: "Classic" },
];

const Products = ({ nftData, ifExists }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.5 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <div className="flex flex-col ml-[10%] md:pl-[20%] pt-10 md:pt-5 lg:pt-10 text-[#fff] h-[62vh] md:h-[40vh] lg:h-[60vh]">
      {ifExists ? (
        <div className="pb-4">
          <h1 className="text-2xl font-semibold pb-3 lg:pb-5 md:mr-5">
            Last 7 days popular search
          </h1>
          <div className="flex gap-x-4 items-center ">
            {button.map((val, i) => (
              <button className="rounded-full  border-2 border-[#ffffff57] px-2">
                {val.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-row gap-x-3 mb-5 bg-[#080B2A57] w-[25vh] md:w-[15vh] rounded-xl py-1 items-center justify-center text-[#E2E4E9]">
          <button>Trending</button>
          <button>Top</button>
        </div>
      )}
      <div className="">
        <Splide options={splideOptions}>
          {nftData.map((val, i) => (
            <SplideSlide key={i}>
              <Nft {...val} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Products;
