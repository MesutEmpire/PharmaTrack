import { Link, NavLink, Outlet } from "react-router-dom";
import { data } from "../utils/data";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../stores/userAuthSlice";

const Sidebar = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <div className=" flex gap-x-8 max-w-8xl min-h-screen">
      <div className="flex justify-center w-1/6 bg-[#482059]  border-r border-gray-700 ">
        <aside className="fixed left-0  w-[15%] items-center my-24 mx-4">
          {data.map((data: any, key: number) => {
            return (
              <NavLink className="nav" to={data.link}>
                <data.icon />
                {data.tag}
              </NavLink>
            );
          })}
        </aside>
        <div className="fixed left-0 bottom-4 text-white mx-4">
          {" "}
          {currentUser.username}
        </div>
      </div>
      <div className="w-5/6 h-full mt-24">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
