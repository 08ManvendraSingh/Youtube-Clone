import React from "react";
import useSearchSuggestion from "../hooks/useSearchSuggestion";
import ResultVideoCard from "./ResultVideoCard";
import { useSelector } from "react-redux";

const Results = () => {
  const searchSuggVideos = useSearchSuggestion();
  const isMenuOpen = useSelector((store) => store.sideBar.isMenuOpen);
  const isDarkTheme = useSelector((store) => store.Theme.isDarkTheme);

  if (searchSuggVideos.length === 0) return null;

  return isMenuOpen ? (
    <div
      className={`fixed w-10/12 h-[90%] left-[16.6667%] overflow-y-scroll no-scrollbar grid col1 col-span-12] 
    overflow-x-hidden ${
      isDarkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-[#0f0f0f]"
    }`}
    >
      {searchSuggVideos.map((x) => (
        <ResultVideoCard key={x?.id} data={x} />
      ))}
    </div>
  ) : (
    <div
      className={`fixed w-full h-[90%] overflow-y-scroll no-scrollbar p-3 top-14 grid grid-cols-[repeat(auto-fill,minmax(100vw,_1fr))] gap-[2rem_1rem] 
  overflow-x-hidden ${
    isDarkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-[#0f0f0f]"
  }`}
    >
      {searchSuggVideos.map((x) => (
        <ResultVideoCard key={x?.id} data={x} />
      ))}
    </div>
  );
};

export default Results;
