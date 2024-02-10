import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_COMMENT_API } from "../utils/constants";

const useComments = (VideoId) => {
  const [videosComment, setVideosComment] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, [VideoId]);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_COMMENT_API + VideoId);
    const json = await data.json();
    console.log(json?.items);
    setVideosComment(json?.items);
  };

  return videosComment;
};

export default useComments;
