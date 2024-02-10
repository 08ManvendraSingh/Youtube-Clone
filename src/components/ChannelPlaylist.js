import React from "react";
import usePlayList from "../hooks/usePlayList";
import { Link, useParams } from "react-router-dom";
import ChannelPlayListCard from "./ChannelPlayListCard";

const ChannelPlaylist = () => {
  const { channelId } = useParams();

  const channelPlaylist = usePlayList(channelId);
  return (
    <div
      className="w-full p-3 relative top-14 grid justify-center justify-items-center grid-cols-[repeat(auto-fill,minmax(210px,_1fr))] max-xl:grid-cols-[repeat(auto-fill,minmax(250px,_1fr))] gap-[2rem_1rem] 
overflow-x-hidden"
    >
      {channelPlaylist.map((x) => (
        <Link className="w-full" key={x?.snippet?.resourceId?.videoId}>
          <ChannelPlayListCard info={x} />
        </Link>
      ))}
    </div>
  );
};

export default ChannelPlaylist;
