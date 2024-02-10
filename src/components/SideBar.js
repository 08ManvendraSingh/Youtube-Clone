import { FaHouseChimney } from "react-icons/fa6";
import { sideList, sideListExplor } from "../utils/constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.sideBar.isMenuOpen);
  const isDarkTheme = useSelector((store) => store.Theme.isDarkTheme);

  if (!isMenuOpen) return null;

  return (
    <div
      className={`fixed w-2/12 h-[90%] overflow-y-scroll no-scrollbar whitespace-nowrap ${
        isDarkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-[#0f0f0f]"
      }`}
    >
      <div className="border-b border-[#aaa] py-4 px-6">
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
      <div className="border-b border-[#aaa] py-4 px-6">
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
  );
};

export default SideBar;
