import { BiLike, BiDislike, BiCaretDown, BiCaretUp } from "react-icons/bi";
import { uploadTime, viewCounts } from "../utils/constants";
import { useState } from "react";

const Comments = ({ data }) => {
  const [reply, setReply] = useState(false);

  const showReply = () => {
    return setReply(!reply);
  };

  const publishes = uploadTime(
    data?.snippet?.topLevelComment?.snippet?.publishedAt ||
      data?.snippet?.publishedAt
  );
  const lcount = viewCounts(
    data?.snippet?.topLevelComment?.snippet?.likeCount ||
      data?.snippet?.likeCount
  );

  return (
    <div className="w-full flex mb-6">
      <div className="mr-3">
        <img
          className="w-10 flex-none  object-contain rounded-full"
          src={
            data?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl ||
            data?.snippet?.authorProfileImageUrl
          }
          alt=""
        />
      </div>
      <div>
        <div className="flex mr-4 text-sm mb-2">
          <h5 className="mr-2 font-bold">
            @
            {data?.snippet?.topLevelComment?.snippet?.authorDisplayName ||
              data?.snippet?.authorDisplayName}
          </h5>
          <span>{publishes}</span>
        </div>
        <div className="mb-2">
          <p className="text-sm font-semibold">
            {data?.snippet?.topLevelComment?.snippet?.textDisplay ||
              data?.snippet?.textDisplay}
          </p>
        </div>
        <div className="flex">
          <button className="flex items-center mr-4 text-[#aaa]">
            <BiLike className="mr-3" />
            {lcount}
          </button>
          <button className="mr-4 text-[#aaa]">
            <BiDislike />
          </button>
          <button className="font-semibold">Reply</button>
        </div>
        {data?.replies?.comments?.length > 0 && (
          <div>
            <div
              className="cursor-pointer text-blue-700 flex font-bold text-sm items-center mb-2"
              onClick={showReply}
            >
              {!reply ? (
                <BiCaretDown size="1.5rem" />
              ) : (
                <BiCaretUp size="1.5rem" />
              )}
              <span className="cursor-pointer">
                {data?.replies?.comments?.length} replies
              </span>
            </div>
            <div>
              {reply &&
                data?.replies?.comments.map((i) => (
                  <Comments key={i.id} data={i} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
