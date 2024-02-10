import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_DETAILS_API } from "../utils/constants";

const useVideoDetails = (VideoId) => {
  const [videosDetails, setVideosDetails] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, [VideoId]);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_DETAILS_API + VideoId);
    const json = await data.json();
    console.log(json?.items);
    setVideosDetails(json?.items);
  };

  return videosDetails;
};

export default useVideoDetails;
