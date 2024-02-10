import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="relative top-[3.6rem] w-full">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
