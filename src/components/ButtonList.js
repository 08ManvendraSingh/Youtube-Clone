import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_BUTTON_LIST_API, category } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../utils/categorySlice";

const ButtonList = () => {
  const isDarkTheme = useSelector((store) => store.Theme.isDarkTheme);

  const dispatch = useDispatch();
  const getVideoCat = (x) => {
    dispatch(changeCategory(x));
  };

  return (
    <div
      className={`w-full p-3 fixed z-10 flex items-center overflow-x-scroll scroll-smooth select-none no-scrollbar ${
        isDarkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-[#0f0f0f]"
      }`}
    >
      {category.map((x, index) => (
        <div
          onClick={() => getVideoCat(x)}
          key={index}
          className={`rounded-lg px-3 py-1 mr-3 cursor-pointer whitespace-nowrap  ${
            isDarkTheme ? "bg-[#ffffff14]" : "bg-[#f5f5f5]"
          }`}
        >
          {x}
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
