import React from "react";
import { TfiSearch } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SuggestionBox = (props) => {
  const isDarkTheme = useSelector((store) => store.Theme.isDarkTheme);
  const { data, setShowSuggestion } = props;

  return (
    <div
      className={`suggestionDropdown  absolute top-14 left-10 shadow-lg w-[calc(100%-37px)] lg:w-[calc(100%-100px)] h-fit rounded-xl  ${
        isDarkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-[#0f0f0f]"
      }`}
    >
      {data.map((x, i) => {
        return (
          <Link to={"/results?search_query=" + x}>
            <div
              className={`flex gap-2 cursor-pointer pl-4 py-1 items-center ${
                isDarkTheme ? "hover:bg-[#292424]" : "hover:bg-[#F5F5F5]"
              }`}
            >
              <TfiSearch size="1.1rem" className="flex-none" />
              {x}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SuggestionBox;
