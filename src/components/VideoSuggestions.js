import React, { useEffect, useState } from "react";
import useVideoSuggestion from "../hooks/useVideoSuggestion";
import VideoSuggestionCard from "./VideoSuggestionCard";
import { Link } from "react-router-dom";

const VideoSuggestions = (props) => {
  const { videoId, title } = props;
  const videoSuggestions = useVideoSuggestion(videoId, title);

  return videoSuggestions.map((x) => (
    <Link to={"/watch?v=" + x?.id?.videoId} key={x?.id?.videoId}>
      <VideoSuggestionCard data={x} videoId={x?.id?.videoId} />
    </Link>
  ));
};

export default VideoSuggestions;
