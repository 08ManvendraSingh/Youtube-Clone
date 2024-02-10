import {
  FaItunesNote,
  FaLightbulb,
  FaTrophy,
  FaNewspaper,
  FaGamepad,
  FaFire,
  FaClock,
  FaClockRotateLeft,
  FaClapperboard,
  FaSquareCaretRight,
  FaRegThumbsUp,
  FaVideo,
} from "react-icons/fa6";

export const sideList = [
  { icon: <FaVideo />, name: "Shorts" },
  { icon: <FaVideo />, name: "Subscription" },
  { icon: <FaVideo />, name: "Library" },
  { icon: <FaClockRotateLeft />, name: "History" },
  { icon: <FaSquareCaretRight />, name: "Your videos" },
  { icon: <FaClock />, name: "Watch Later" },
  { icon: <FaRegThumbsUp />, name: "Liked Videos" },
];

export const sideListExplor = [
  { icon: <FaFire />, name: "Trending" },
  { icon: <FaFire />, name: "Shopping" },
  { icon: <FaItunesNote />, name: "Music" },
  { icon: <FaClapperboard />, name: "Films" },
  { icon: <FaItunesNote />, name: "Live" },
  { icon: <FaGamepad />, name: "Gaming" },
  { icon: <FaNewspaper />, name: "News" },
  { icon: <FaTrophy />, name: "Sport" },
  { icon: <FaLightbulb />, name: "Learning" },
  { icon: <FaItunesNote />, name: "Beauty" },
];

export const channelFiter = ["Home", "Playlists", "About"];

export const category = [
  "All",
  "Music",
  "Bollywood Music",
  "Mixes",
  "Live",
  "England Circket Team",
  "Cricket",
  "React Routers",
  "Web Develpoer",
  "Bikers",
  "Kawasaki Ninja ZX10r",
  "Hollywood",
  "Movies",
  "Namaste Javascript",
  "Akshay Saini",
];

export const YOUTUBE_API_KEY = "AIzaSyBDbgpL9ZuDEG2y23W-BGu447bJezccOTw";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=";
export const YOUTUBE_CHANNEL_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  YOUTUBE_API_KEY +
  "&id=";
export const YOUTUBE_VIDEO_DETAILS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  YOUTUBE_API_KEY +
  "&id=";
export const YOUTUBE_VIDEO_COMMENT_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&key=" +
  YOUTUBE_API_KEY +
  "&videoId=";
export const YOUTUBE_VIDEO_SUGGESTIONS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&key=" +
  YOUTUBE_API_KEY +
  "&q=";

export const YOUTUBE_VIDEO_BUTTON_LIST_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&videoDuration=medium&key=" +
  YOUTUBE_API_KEY +
  "&q=";

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_SUGGESTION_VIDEOS_ID_API =
  "https://youtube.googleapis.com/youtube/v3/search?type=channel&type=video&maxResults=15&key=" +
  YOUTUBE_API_KEY +
  "&q=";

export const YOUTUBE_CHANNEL_HOME_API =
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&key=" +
  YOUTUBE_API_KEY +
  "&playlistId=";

export const YOUTUBE_CHANNEL_PLAYLIST_API =
  "zyoutube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&maxResults=15&key=" +
  YOUTUBE_API_KEY +
  "&channelId=";

export const viewCounts = (viewCount) => {
  if (viewCount < 1000) {
    return viewCount.toString();
  } else if (viewCount > 1000 && viewCount < 1000000) {
    return (viewCount / 1000).toFixed() + "K";
  } else if (viewCount > 1000000 && viewCount < 1000000000) {
    return (viewCount / 1000000).toFixed(1) + "M";
  } else if (viewCount > 1000000000 && viewCount < 1000000000000) {
    return (viewCount / 1000000000).toFixed(1) + "B";
  } else {
    return "NA";
  }
};

export const uploadTime = (publishedAt) => {
  // Get the current time
  const currentTime = new Date();

  // Parse the publishedAt timestamp
  const publishedTime = new Date(publishedAt);

  // Calculate the time difference in seconds
  const timeDiff = Math.floor((currentTime - publishedTime) / 1000);

  // Calculate the time difference in years, months, weeks, days, hours, minutes, and seconds
  const years = Math.floor(timeDiff / (365 * 24 * 60 * 60));
  const months = Math.floor(timeDiff / (30 * 24 * 60 * 60));
  const weeks = Math.floor(timeDiff / (7 * 24 * 60 * 60));
  const days = Math.floor(timeDiff / (24 * 60 * 60));
  const hours = Math.floor(timeDiff / (60 * 60));
  const minutes = Math.floor(timeDiff / 60);
  const seconds = timeDiff;

  // Determine the appropriate time unit to display
  let timeUnit = "";
  let timeValue = 0;

  if (years > 0) {
    timeUnit = "year";
    timeValue = years;
  } else if (months > 0) {
    timeUnit = "month";
    timeValue = months;
  } else if (weeks > 0) {
    timeUnit = "week";
    timeValue = weeks;
  } else if (days > 0) {
    timeUnit = "day";
    timeValue = days;
  } else if (hours > 0) {
    timeUnit = "hour";
    timeValue = hours;
  } else if (minutes > 0) {
    timeUnit = "minute";
    timeValue = minutes;
  } else {
    timeUnit = "second";
    timeValue = seconds;
  }

  // Return the formatted time duration
  return `${timeValue} ${timeUnit}${timeValue !== 1 ? "s" : ""} ago`;
};

export const convertDuration = (t) => {
  var x = t.split("T"),
    duration = "",
    time = {},
    period = {},
    s = "string",
    v = "variables",
    l = "letters",
    d = {
      period: {
        string: x[0].substring(1, x[0].length),
        len: 4,
        letters: ["Y", "M", "W", "D"],
        variables: {},
      },
      time: {
        string: x[1],
        len: 3,
        letters: ["H", "M", "S"],
        variables: {},
      },
    };
  if (!d.time.string) {
    d.time.string = "";
  }

  for (var i in d) {
    var len = d[i].len;
    for (var j = 0; j < len; j++) {
      d[i][s] = d[i][s].split(d[i][l][j]);
      if (d[i][s].length > 1) {
        d[i][v][d[i][l][j]] = parseInt(d[i][s][0], 10);
        d[i][s] = d[i][s][1];
      } else {
        d[i][v][d[i][l][j]] = 0;
        d[i][s] = d[i][s][0];
      }
    }
  }
  period = d.period.variables;
  time = d.time.variables;
  time.H +=
    24 * period.D +
    24 * 7 * period.W +
    24 * 7 * 4 * period.M +
    24 * 7 * 4 * 12 * period.Y;

  if (time.H) {
    duration = time.H + ":";
    if (time.M < 10) {
      time.M = "0" + time.M;
    }
  }

  if (time.S < 10) {
    time.S = "0" + time.S;
  }

  duration += time.M + ":" + time.S;
  return duration;
};
