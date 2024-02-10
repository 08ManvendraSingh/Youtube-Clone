import useVideos from "../hooks/useVideos";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useBtnVideos from "../hooks/useBtnVideos";

const VideoCardContainer = () => {
  const videoList = useVideos();
  const category = useSelector((store) => store.videoCategory.category);
  const BtnVideos = useBtnVideos(category);

  return (
    <div
      className="w-full p-3 relative top-14 grid justify-center justify-items-center grid-cols-[repeat(auto-fill,minmax(310px,_1fr))] max-xl:grid-cols-[repeat(auto-fill,minmax(250px,_1fr))] gap-[2rem_1rem] 
    overflow-x-hidden"
    >
      {BtnVideos.length < 0
        ? videoList.map((x) => (
            <Link className="w-full" to={"/watch?v=" + x.id} key={x.id}>
              <VideoCard info={x} />
            </Link>
          ))
        : BtnVideos.map((x) => (
            <Link
              className="w-full"
              to={"/watch?v=" + x?.id?.videoId}
              key={x?.id?.videoId}
            >
              <VideoCard info={x} />
            </Link>
          ))}
    </div>
  );
};

export default VideoCardContainer;
