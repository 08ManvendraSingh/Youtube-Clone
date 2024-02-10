import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoCardContainer from "./VideoCardContainer";

const VideoContainer = () => {
  const isMenuOpen = useSelector((store) => store.sideBar.isMenuOpen);
  const isDarkTheme = useSelector((store) => store.Theme.isDarkTheme);

  return isMenuOpen ? (
    <div
      className={`fixed w-10/12 h-[90%] left-[16.6667%] overflow-y-scroll no-scrollbar ${
        isDarkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-[#0f0f0f]"
      }`}
    >
      <ButtonList />
      <VideoCardContainer />
    </div>
  ) : (
    <div
      className={`fixed w-full h-[90%] overflow-y-scroll no-scrollbar ${
        isDarkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-[#0f0f0f]"
      }`}
    >
      <ButtonList />
      <VideoCardContainer />
    </div>
  );
};

export default VideoContainer;
