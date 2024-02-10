import { FaHouseChimney } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsYoutube } from "react-icons/bs";
import { sideList, sideListExplor } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleWatchSideBar } from "../utils/sideBarSlice";

const WatchSideBar = () => {
  const isSideBarOpen = useSelector((store) => store.sideBar.isSideBarOpen);
  const isDarkTheme = useSelector((store) => store.Theme.isDarkTheme);

  const dispatch = useDispatch();
  const handleWatchSideBarClick = () => {
    dispatch(toggleWatchSideBar());
  };

  if (!isSideBarOpen) return null;

  return (
    <div>
      <div
        onClick={handleWatchSideBarClick}
        className="w-full h-full bg-black/40 absolute top-0 left-0 z-30"
      ></div>
      <div
        className={`fixed w-2/12 h-full z-40 overflow-y-scroll no-scrollbar whitespace-nowrap ${
          isDarkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-[#0f0f0f]"
        }`}
      >
        <div className={`w-2/12 py-4 px-6 z-10 fixed flex items-center justify-center  ${
          isDarkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-[#0f0f0f]"
        }`}>
          <div className="w-2/12">
            <RxHamburgerMenu
              onClick={handleWatchSideBarClick}
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
        <div className="border-b border-[#aaa] py-4 px-6 z-0 relative top-[7%]">
          <Link to="/">
            <div
              className={`flex gap-4 items-center rounded-lg p-3 cursor-pointer ${
                isDarkTheme ? "hover:bg-[#282828]" : "hover:bg-[#f5f5f5]"
              }`}
            >
              <FaHouseChimney />
              <span> Home</span>
            </div>
          </Link>
          {sideList.map((x) => (
            <div
              className={`flex gap-4 items-center rounded-lg p-3 cursor-pointer ${
                isDarkTheme ? "hover:bg-[#282828]" : "hover:bg-[#f5f5f5]"
              }`}
              key={x.name}
            >
              <span>{x.icon}</span> {x.name}
            </div>
          ))}
        </div>
        <div className="border-b border-[#aaa] py-4 px-6 z-0 relative top-[7%]">
          {sideListExplor.map((x) => (
            <div
              className={`flex gap-4 items-center rounded-lg p-3 cursor-pointer ${
                isDarkTheme ? "hover:bg-[#282828]" : "hover:bg-[#f5f5f5]"
              }`}
              key={x.name}
            >
              <span>{x.icon}</span> {x.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchSideBar;
