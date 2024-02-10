import { BiLike, BiDislike } from "react-icons/bi";
import { LiaDownloadSolid } from "react-icons/lia";
import { TbShare3 } from "react-icons/tb";
import { LuMoreHorizontal } from "react-icons/lu";
import { uploadTime, viewCounts } from "../utils/constants";
import useChannelInfo from "../hooks/useChannelInfo";
import { useState } from "react";
import { useSelector } from "react-redux";

const VideoChannelInfo = (props) => {
  const [descript, setDescription] = useState(false);
  const { snippet, statistics } = props?.data[0];
  const { title, channelTitle, publishedAt, channelId, description } = snippet;
  const { likeCount, viewCount } = statistics;

  const channelInfo = useChannelInfo(channelId);

  const lcounts = viewCounts(likeCount);
  const vcounts = viewCounts(viewCount);
  const publishedTime = uploadTime(publishedAt);
  const scounts = viewCounts(channelInfo[0]?.statistics?.subscriberCount);

  const showDesc = () => {
    return setDescription(!descript);
  };

  const isDarkTheme = useSelector((store) => store.Theme.isDarkTheme);

  return (
    <div className="video_data mb-4">
      <div className="video_title font-bold text-lg mb-2">{title}</div>
      <div className="channel_video_stats flex justify-between flex-wrap gap-y-4 gap-2 items-center">
        <div className="channel_details flex gap-2 items-center">
          <div className="channel_logo w-10 h-10 ">
            <img
              className="w-full rounded-full"
              src={channelInfo[0]?.snippet?.thumbnails?.default?.url}
              alt="channel icon"
            />
          </div>
          <div className="channel_name">
            <div className="name font-bold text-sm">{channelTitle}</div>
            <div className="sub_count text-xs">{scounts} subscribers</div>
          </div>
          <div className="subs_button ml-2">
            <button
              className={`text-sm rounded-2xl px-4 py-2 font-medium ${
                isDarkTheme ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              {" "}
              Subscribe
            </button>
          </div>
        </div>

        <div className="video_stats flex items-center flex-wrap gap-2 text-sm">
          <div
            className={`button-wrapper flex rounded-2xl p-2 ${
              isDarkTheme ? "bg-[#ffffff1a]" : "bg-[#F5F5F5]"
            }`}
          >
            <button className="like flex gap-1 items-center pr-2">
              <div className="like_icon">
                <BiLike
                  size="1.2rem"
                  className={`${isDarkTheme ? "text-white" : "text-gray-600"}`}
                />
              </div>
              <div className="like_count ">{lcounts}</div>
            </button>
            <button className="cursor-pointer">
              <div
                className={`border-l-2 pl-2 ${
                  isDarkTheme ? "border-white/50" : " border-black/20"
                }`}
              >
                <BiDislike
                  size="1.2rem"
                  className={`${isDarkTheme ? "text-white" : "text-gray-600"}`}
                />
              </div>
            </button>
          </div>
          <button
            className={`share flex items-center gap-2 rounded-2xl p-2 ${
              isDarkTheme ? "bg-[#ffffff1a]" : "bg-[#F5F5F5]"
            }`}
          >
            <TbShare3 />
            <span>Share</span>
          </button>
          <button
            className={`download flex items-center justify-center gap-2 rounded-2xl p-2 ${
              isDarkTheme ? "bg-[#ffffff1a]" : "bg-[#F5F5F5]"
            }`}
          >
            <LiaDownloadSolid />
            <span>Download</span>
          </button>
          <button
            className={`more flex items-center gap-2 rounded-2xl p-2 ${
              isDarkTheme ? "bg-[#ffffff1a]" : "bg-[#F5F5F5]"
            }`}
          >
            <LuMoreHorizontal />
          </button>
        </div>
      </div>
      <div
        className={`video_desc mt-4 text-sm p-4 rounded-xl ${
          isDarkTheme ? "bg-[#ffffff1a]" : "bg-[#F5F5F5]"
        }`}
      >
        <div className="view_date flex gap-4 font-bold pb-1">
          <div className="video_views ">{vcounts} views</div>
          <div className="published_date">{publishedTime}</div>
        </div>
        <div className="desc whitespace-pre-wrap break-words ">
          <span className="font-bold cursor-pointer" onClick={showDesc}>
            {!descript
              ? description.slice(0, 150) + "  ...more"
              : description + "  ...Show Less"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoChannelInfo;
