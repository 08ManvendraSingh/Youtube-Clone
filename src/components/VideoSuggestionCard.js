import React from "react";
import { uploadTime, viewCounts, convertDuration } from "../utils/constants";
import useVideoDetails from "../hooks/useVideoDetails";

const VideoSuggestionCard = ({ data, videoId }) => {
  const { thumbnails, title, channelTitle, publishedAt } = data?.snippet;
  const published = uploadTime(publishedAt);

  const videoDetail = useVideoDetails(videoId);
  const views = viewCounts(videoDetail[0]?.statistics?.viewCount);

  return (
    <div className="video flex  gap-2 md:gap-4  lg:gap-2 xl:gap-4 cursor-pointer mb-4 ">
      <div className="video__thumbnail h-[80px] sm:h-[96px] relative top-0 left-0 lg:w-[150px] lg:flex-none xl:w-[200px] xl:h-[120px] ">
        <img
          src={thumbnails.default.url}
          className="rounded-xl w-full h-full object-cover"
          alt="video thumbnail"
        />
        {videoDetail[0]?.contentDetails?.duration && (
          <div className="absolute bottom-1 right-1 bg-black/80 px-2 py-1 rounded-md text-xs text-white">
            {convertDuration(videoDetail[0]?.contentDetails?.duration)}
          </div>
        )}
      </div>
      <div className="video__details ">
        <div className="">
          <div className="video-title  font-semibold text-sm md:text-base lg:text-sm leading-tight md:leading-normal lg:leading-tight h-[50%]  ">
            {title}
          </div>
          <div className="small h-[50%]  ">
            <div className="channel-name text-xs xl:text-sm pt-2">
              {channelTitle}
            </div>
            <div className="text-xs ">
              <span>{views}views</span>
              <span> • </span>
              <span>{published}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSuggestionCard;
