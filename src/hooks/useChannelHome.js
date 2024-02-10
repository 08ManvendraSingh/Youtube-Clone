import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_HOME_API } from "../utils/constants";

const useChannelHome = (uploads) => {
  const [channelHome, setChannelHome] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, [uploads]);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_HOME_API + uploads);
    const json = await data.json();
    console.log(json.items);
    setChannelHome(json.items);
  };

  return channelHome;
};

export default useChannelHome;
