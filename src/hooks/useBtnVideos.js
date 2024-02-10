import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_BUTTON_LIST_API } from "../utils/constants";

const useBtnVideos = (category) => {
  const [BtnVideos, setBtnVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, [category]);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_BUTTON_LIST_API + category);
    const json = await data.json();
    console.log(json?.items);
    setBtnVideos(json?.items);
  };

  return BtnVideos;
};

export default useBtnVideos;
