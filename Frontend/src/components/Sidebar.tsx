import { Link, NavLink, Outlet } from "react-router-dom";
import {navlinks} from "../utils/data";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../stores/userAuthSlice";

const Sidebar = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
<div className='bg-white'>
    <div className=' flex flex-initial items-baseline flex-col gap-y-2'>
        {navlinks.map((nav: any, key: number) => {
            return (
                <NavLink key={key} to={nav.link} className={'nav items-center '}>
                    <nav.icon color='fill-blue-900 hover:fill-amber-300' className='basis-1/5' />
                  <p className='flex justify-center'>  {nav.tag}</p>
                </NavLink>
            );
        })}
    </div>
</div>
  );
};

export default Sidebar;
//
//
// import { Link, NavLink, Outlet } from "react-router-dom";
// import { data } from "../utils/data";
// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../stores/userAuthSlice";
//
// const Sidebar = () => {
//     const currentUser = useSelector(selectCurrentUser);
//     return (
//         <div className=" flex gap-x-8 max-w-8xl min-h-screen">
//             <div className="flex justify-center w-[15%] bg-[#482059] border-r border-gray-700 ">
//                 <aside className="left-0 items-center my-24 mx-4 relative w-full">
//                     {data.map((data: any, key: number) => {
//                         return (
//                             <NavLink className="nav" to={data.link}>
//                                 <data.icon />
//                                 {data.tag}
//                             </NavLink>
//                         );
//                     })}
//                 </aside>
//                 <div className="fixed left-0 bottom-4 text-white mx-4">
//                     {" "}
//                     {currentUser.username}
//                 </div>
//             </div>
//             <div className="w-5/6 h-full mt-24">
//                 <Outlet />
//             </div>
//         </div>
//     );
// };
//
// export default Sidebar;
