import useVideoDetails from "../hooks/useVideoDetails";
import { viewCounts, uploadTime, convertDuration } from "../utils/constants";

const ChannelVideoCard = ({ info }) => {
  const {
    thumbnails,
    title,
    channelTitle,
    publishedAt,
    channelId,
    resourceId,
  } = info?.snippet;
  //   const { viewCount } = info?.statistics;

  const published = uploadTime(publishedAt);
  const videoDetail = useVideoDetails(resourceId?.videoId);
  //   const views = viewCounts(viewCount);

  return (
    <div className="video w-full cursor-pointer h-fit">
      <div className="video__thumbnail  relative">
        <img
          src={thumbnails?.medium?.url}
          className="rounded-xl w-full"
          alt="video thumbnail"
        />
        {videoDetail[0]?.contentDetails?.duration && (
          <div className="absolute bottom-1 right-1 bg-black/80 px-2 py-1 rounded-md text-xs text-white">
            {convertDuration(videoDetail[0]?.contentDetails?.duration)}
          </div>
        )}
      </div>
      <div className="video__details pt-4">
        <div className="flex gap-2">
          <div className="video-detail">
            <div className="video-title font-semibold text-base leading-snug ">
              {title}
            </div>
            <div className="channel-name text-xs pt-2">{channelTitle}</div>
            <div className="text-xs pt-1">
              {/* <span>{views} views</span> */}
              <span> • </span>
              <span>{published}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelVideoCard;
