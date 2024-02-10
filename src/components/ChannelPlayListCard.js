import { uploadTime, convertDuration } from "../utils/constants";
import { CgPlayList } from "react-icons/cg";

const ChannelPlayListCard = ({ info }) => {
  const { thumbnails, title, publishedAt } = info?.snippet;

  const published = uploadTime(publishedAt);

  return (
    <div className="video w-full cursor-pointer h-fit">
      <div className="video__thumbnail  relative">
        <img
          src={thumbnails?.medium?.url}
          className="rounded-xl w-full"
          alt="video thumbnail"
        />
        <div className="relative bottom-6 bg-black/80 px-2 py-1 rounded-b-md text-xs text-white flex justify-between">
          <span>
            <CgPlayList className="text-lg" />
          </span>
          <span>{info?.contentDetails?.itemCount} videos</span>
        </div>
      </div>
      <div className="video__details">
        <div className="flex gap-2">
          <div className="video-detail">
            <div className="video-title font-semibold text-base leading-snug ">
              {title}
            </div>
            <div className="text-xs pt-1">
              <span>Created {published}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelPlayListCard;
