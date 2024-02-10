import React from "react";
import { useParams } from "react-router-dom";
import useChannelInfo from "../hooks/useChannelInfo";

const AboutChannel = () => {
  const { channelId } = useParams();
  const channelInfo = useChannelInfo(channelId);
  console.log(channelInfo);
  return (
    <div className="w-full p-3 relative top-14 flex flex-row gap-[2rem_1rem]">
      <div className="flex-grow-[2] flex-shrink-[2] basis-0">
        <h3 className="mb-5 font-medium text-lg">Description</h3>

        <div>{channelInfo[0]?.snippet?.localized?.description}</div>
      </div>
      <div className="flex-1">
        <div className="border-b border-[#AAAAAA] py-4 chViewsTitle">Stats</div>
        <div className="border-b border-[#AAAAAA] py-4 ">
          {"Joined " +
            new Date(channelInfo[0]?.snippet?.publishedAt)
              ?.toDateString()
              .slice(4)}
        </div>
        <div className="border-b border-[#AAAAAA] py-4 ">
          {parseInt(channelInfo[0]?.statistics?.viewCount).toLocaleString(
            "en-US"
          ) + " views"}
        </div>
      </div>
    </div>
  );
};

export default AboutChannel;
