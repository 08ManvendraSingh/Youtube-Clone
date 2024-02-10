import React from "react";
import useChannelHome from "../hooks/useChannelHome";
import { Link, useOutletContext } from "react-router-dom";
import ChannelVideoCard from "./ChannelVideoCard";

const HomeChannel = () => {
  const [data] = useOutletContext();
  const channelHome = useChannelHome(
    data[0]?.contentDetails?.relatedPlaylists?.uploads
  );
  return (
    <div
      className="w-full p-3 relative top-14 grid justify-center justify-items-center grid-cols-[repeat(auto-fill,minmax(210px,_1fr))] max-xl:grid-cols-[repeat(auto-fill,minmax(250px,_1fr))] gap-[2rem_1rem] 
  overflow-x-hidden"
    >
      {channelHome.map((x) => (
        <Link
          className="w-full"
          to={"/watch?v=" + x?.snippet?.resourceId?.videoId}
          key={x?.snippet?.resourceId?.videoId}
        >
          <ChannelVideoCard info={x} />
        </Link>
      ))}
    </div>
  );
};

export default HomeChannel;
