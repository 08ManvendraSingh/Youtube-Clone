import { RxHamburgerMenu, RxMagnifyingGlass } from "react-icons/rx";
import {
  BsYoutube,
  BsFillMoonFill,
  BsBrightnessHighFill,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar, toggleWatchSideBar } from "../utils/sideBarSlice";
import { toggleTheme } from "../utils/Theme";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import SuggestionBox from "./SuggestionBox";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => fetchsuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchsuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSearchSuggestion(json[1]);
  };

  const dispatch = useDispatch();

  const handleSideBarClick = () => {
    dispatch(toggleSideBar());
  };

  const handleWatchSideBarClick = () => {
    dispatch(toggleWatchSideBar());
  };

  const toggleDarkTheme = () => {
    dispatch(toggleTheme());
  };

  const isDarkTheme = useSelector((store) => store.Theme.isDarkTheme);
  const route = useLocation();

  return (
    <div
      className={`w-full flex items-center justify-between fixed z-40 py-2 px-3 ${
        isDarkTheme
          ? "bg-[#0f0f0f] text-white"
          : "bg-white text-[#0f0f0f] shadow-sm"
      }`}
    >
      <div className="w-2/12 flex items-center justify-center mr-2">
        <div className="w-2/12">
          <RxHamburgerMenu
            onClick={
              route.pathname === "/watch"
                ? handleWatchSideBarClick
                : handleSideBarClick
            }
            className="text-xl cursor-pointer"
          />
        </div>
        <div className="w-8/12">
          <Link to="/" className="flex items-center">
            <BsYoutube className="mr-1 text-2xl text-[#ff3f3f] cursor-pointer" />
            <span className="font-semibold text-xl tracking-tight cursor-pointer">
              YouTube
            </span>
          </Link>
        </div>
      </div>
      <div className="w-5/12 relative">
        <div className="w-full flex items-center">
          <input
            value={searchQuery}
            onFocus={() => setShowSuggestion(true)}
            onBlurCapture={() => setShowSuggestion(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-11/12 outline-none bg-transparent border border-[#303030] rounded-l-3xl px-6 py-2"
            type="text"
            placeholder="Search"
          />
          <button className="w-1/12 py-[10px] px-3 border border-[#303030] rounded-r-3xl">
            <RxMagnifyingGlass className="text-xl" />
          </button>
        </div>
        {showSuggestion && setShowSuggestion && (
          <SuggestionBox
            data={searchSuggestion}
            setShowSuggestion={setShowSuggestion}
          />
        )}
      </div>
      <div className="w-1/12">
        <div className="w-full">
          <div onClick={toggleDarkTheme}>
            {isDarkTheme ? (
              <BsBrightnessHighFill className="text-xl cursor-pointer" />
            ) : (
              <BsFillMoonFill className="text-xl cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
