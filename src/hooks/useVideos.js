import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API, YOUTUBE_API_KEY } from "../utils/constants";

const useVideos = () => {
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API + YOUTUBE_API_KEY);
    const json = await data.json();
    console.log(json?.items);
    setVideosList(json?.items);
  };

  return videosList;
};

export default useVideos;
