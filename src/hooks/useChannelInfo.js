import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_API } from "../utils/constants";

const useChannelInfo = (channelId) => {
  const [channelInfo, setChannelInfo] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, [channelId]);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_API + channelId);
    const json = await data.json();
    console.log(json);
    setChannelInfo(json.items);
  };

  return channelInfo;
};

export default useChannelInfo;
