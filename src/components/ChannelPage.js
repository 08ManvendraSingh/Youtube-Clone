import { Link, Outlet } from "react-router-dom";
import { viewCounts, channelFiter } from "../utils/constants";
import { useState } from "react";

const ChannelPage = ({ data }) => {
  const scounts = viewCounts(data[0]?.statistics?.subscriberCount);
  const vcounts = viewCounts(data[0]?.statistics?.videoCount);
  const [actice, setActive] = useState(0);

  return (
    <div id="channelBody">
      <div className="chPageContainer w-full relative py-5 px-20">
        <div className="channelDescSection flex justify-between mb-8">
          <div className="channelThumbIcon h-[136px] w-[136px] rounded-full">
            <img
              className="channelThumbIcon h-[136px] w-[136px] rounded-full"
              src={data[0]?.snippet?.thumbnails?.default?.url}
            />
          </div>
          <div className="channelInfoContainer w-7/12 pt-4">
            <div className="channelDescTitle font-medium text-2xl mb-1">
              {data[0]?.snippet?.title}
            </div>
            <div className="channelDescInfo flex gap-2 text-[#AAAAAA] mb-2">
              <span>{data[0]?.snippet?.customUrl}</span>
              <span>{scounts} subscribers</span>
              <span>{vcounts} videos</span>
            </div>
            <div className="channelDescription flex items-center gap-1 text-[#AAAAAA]">
              {data[0]?.snippet?.description.slice(0, 65)}
              <Link
                to={"/channel/" + data[0]?.id + "/about"}
                onClick={() => setActive(2)}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="navToAbout h-5 w-5 fill-white"
                >
                  <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="channelSubsSection w-1/12 pt-4">
            <div className="btn subs p-2 bg-white text-black font-medium rounded-full text-center">
              Subscribe
            </div>
          </div>
        </div>
        <div className="channelSections flex gap-4">
          {channelFiter.map((x, i) => (
            <Link
              to={"/channel/" + data[0]?.id + "/" + x.toLowerCase()}
              key={i}
              onClick={() => setActive(i)}
            >
              <span
                className={`py-2 px-4 font-normal text-[#AAAAAA] cursor-pointer text-lg ${
                  actice === i && "border-b-2 border-white"
                }`}
              >
                {x}
              </span>
            </Link>
          ))}
        </div>
        <Outlet context={[data]} />
      </div>
    </div>
  );
};

export default ChannelPage;
