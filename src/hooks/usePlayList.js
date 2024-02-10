import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_PLAYLIST_API } from "../utils/constants";

const usePlayList = (channelId) => {
  const [channelPlaylist, setChannelPlaylist] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, [channelId]);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_PLAYLIST_API + channelId);
    const json = await data.json();
    console.log(json?.items);
    setChannelPlaylist(json?.items);
  };

  return channelPlaylist;
};

export default usePlayList;
