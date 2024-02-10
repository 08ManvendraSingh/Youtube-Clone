import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import Watch from "./components/Watch";
import Results from "./components/Results";
import Channel from "./components/Channel";
import ChannelPlaylist from "./components/ChannelPlaylist";
import AboutChannel from "./components/AboutChannel";
import HomeChannel from "./components/HomeChannel";

const App = () => {
  return (
    <Provider store={Store}>
      <div className="bg-[#0f0f0f] text-white w-full h-full">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <VideoContainer />,
          },
          {
            path: "/results",
            element: <Results />,
          },
          {
            path: "/channel/:channelId",
            element: <Channel />,
            children: [
              {
                path: "/channel/:channelId/",
                element: <HomeChannel />,
              },
              {
                path: "/channel/:channelId/home",
                element: <HomeChannel />,
              },
              {
                path: "/channel/:channelId/playlists",
                element: <ChannelPlaylist />,
              },
              {
                path: "/channel/:channelId/about",
                element: <AboutChannel />,
              },
            ],
          },
        ],
      },
      {
        path: "/watch",
        element: <Watch />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
