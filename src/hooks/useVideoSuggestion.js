import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_SUGGESTIONS_API } from "../utils/constants";

const useVideoSuggestion = (videoId, title) => {
  const [videosSuggestions, setVideosSuggestions] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, [title]);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_SUGGESTIONS_API + title);
    const json = await data.json();
    console.log(json?.items);
    setVideosSuggestions(json?.items);
  };

  return videosSuggestions;
};

export default useVideoSuggestion;
