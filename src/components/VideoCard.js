import useChannelInfo from "../hooks/useChannelInfo";
import { viewCounts, uploadTime } from "../utils/constants";

const VideoCard = ({ info }) => {
  const { thumbnails, title, channelTitle, publishedAt, channelId } =
    info?.snippet;
  // const { viewCount } = info?.statistics;

  const published = uploadTime(publishedAt);
  // const views = viewCounts(viewCount);
  const channelInfo = useChannelInfo(channelId);

  return (
    <div className="video w-full cursor-pointer h-fit">
      <div className="video__thumbnail  relative">
        <img
          src={thumbnails?.medium?.url}
          className="rounded-xl w-full"
          alt="video thumbnail"
        />
      </div>
      <div className="video__details pt-4">
        <div className="flex gap-2">
          <div className="channel-logo flex flex-shrink-0 ">
            <img
              src={channelInfo[0]?.snippet?.thumbnails?.medium?.url}
              className="rounded-[50%]  w-10 h-10  object-cover"
              alt="channel logo"
            />
          </div>
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

export default VideoCard;
