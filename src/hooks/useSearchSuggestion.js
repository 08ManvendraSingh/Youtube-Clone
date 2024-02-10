import { useEffect, useState } from "react";
import {
  YOUTUBE_SEARCH_SUGGESTION_VIDEOS_ID_API,
  YOUTUBE_VIDEO_DETAILS_API,
} from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const useSearchSuggestion = (videoId, title) => {
  const [searchParams] = useSearchParams();
  const squery = searchParams.get("search_query");

  const [searchSuggVideo, setSearchSuggVideo] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, [squery]);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_VIDEOS_ID_API + squery);
    const json = await data.json();

    const datas = await fetch(
      YOUTUBE_VIDEO_DETAILS_API + json?.items.map((x) => x?.id?.videoId)
    );
    const jsons = await datas.json();
    setSearchSuggVideo(jsons?.items);
  };

  return searchSuggVideo;
};

export default useSearchSuggestion;
