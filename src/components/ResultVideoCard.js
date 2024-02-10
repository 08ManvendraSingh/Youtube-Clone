import React from "react";
import { Link } from "react-router-dom";
import { convertDuration, uploadTime, viewCounts } from "../utils/constants";
import useVideoDetails from "../hooks/useVideoDetails";
import { useSelector } from "react-redux";

const ResultVideoCard = ({ data }) => {
  const isDarkTheme = useSelector((store) => store.Theme.isDarkTheme);

  const {
    thumbnails,
    title,
    channelTitle,
    publishedAt,
    channelId,
    description,
  } = data?.snippet;
  const { viewCount } = data?.statistics;

  const published = uploadTime(publishedAt);
  const views = viewCounts(viewCount);
  const videoDetail = useVideoDetails(data?.id);

  return (
    <div className="videoBox flex gap-4 mb-4 ">
      <Link to={"/watch?v=" + data?.id} className="textNone">
        <div className="videoThumb rounded-lg relative top-0 left-0 min-w-[35%] h-[170px]">
          <img
            src={thumbnails?.medium?.url}
            className="videoThumbImg rounded-xl h-[170px] w-full object-cover"
          />
          {videoDetail[0]?.contentDetails?.duration && (
            <span className="videoCardDuration absolute bottom-1 right-1 bg-black/80 px-2 py-1 rounded-md text-xs text-white">
              {convertDuration(videoDetail[0]?.contentDetails?.duration)}
            </span>
          )}
        </div>
      </Link>
      <div className="videoBoxDescCont w-[65%]">
        <Link to={"/watch?v=" + data?.id} className="">
          <div className="videoBoxTitle text-lg font-medium mb-2 overflow-hidden overflow-ellipsis">
            {title}
          </div>
        </Link>
        <div
          className={`mobSearchVideoBoxDesc ${
            isDarkTheme ? "text-[#f5f5f5c4]" : "text-[#0f0f0fe3]"
          }`}
        >
          <Link to={"/watch?v=" + data?.id} className="textNone">
            <div className="videoBoxTime text-xs mb-2">
              {views + " views • " + published}
            </div>
          </Link>
          {
            <Link to={"/channel/" + channelId} className="textNone">
              <div className="videoBoxChannelTitle text-xs mb-2 boldText">
                {channelTitle}
              </div>
            </Link>
          }
        </div>
        <div
          className={`videoBoxDesc text-xs overflow-hidden overflow-ellipsis whitespace-normal break-words ${
            isDarkTheme ? "text-[#f5f5f5c4]" : "text-[#0f0f0fe3]"
          }`}
        >
          {description.slice(0, 200) + " ..."}
        </div>
      </div>
    </div>
  );
};

export default ResultVideoCard;
