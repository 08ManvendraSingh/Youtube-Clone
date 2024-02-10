import { useSelector } from "react-redux";
import WatchSideBar from "./WatchSideBar";
import { useSearchParams } from "react-router-dom";
import useVideoDetails from "../hooks/useVideoDetails";
import VideoChannelInfo from "./VideoChannelInfo";
import Comments from "./Comments";
import useComments from "../hooks/useComments";
import VideoSuggestions from "./VideoSuggestions";

const Watch = () => {
  const isDarkTheme = useSelector((store) => store.Theme.isDarkTheme);

  const [searchParam] = useSearchParams();
  const VideoId = searchParam.get("v");
  const VideoDetail = useVideoDetails(VideoId);
  const Comment = useComments(VideoId);

  if (VideoDetail.length === 0) return null;

  return (
    <>
      <WatchSideBar />
      <div
        className={`grid grid-cols-12 md:gap-x-8 px-4 md:px-12 2xl:px-24 gap-y-4 pt-4 h-[90%] relative top-[3.6rem] overflow-y-scroll no-scrollbar ${
          isDarkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-[#0f0f0f]"
        }`}
      >
        <div className="col1 col-span-12 lg:col-span-8">
          <div className="mb-4">
            <div className="mb-4 h-[32vh] md:h-[50vh] lg:h-[50vh] 2xl:h-[70vh]">
              <iframe
                width="100%"
                height="100%"
                src={
                  "https://www.youtube.com/embed/" +
                  VideoId +
                  "?si=KHz3M05qmkntp21B"
                }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
          <VideoChannelInfo data={VideoDetail} />
          {Comment.map((x) => (
            <Comments key={x.id} data={x} />
          ))}
        </div>
        <div className="col1 col-span-12 lg:col-span-4">
          <VideoSuggestions
            videoId={VideoId}
            title={VideoDetail[0]?.snippet?.title}
          />
        </div>
      </div>
    </>
  );
};

export default Watch;
