import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutCurrentUser, selectCurrentUser,setShowDropdown } from "../stores/userAuthSlice";
import React, {useState} from "react";
import IconDropdown from "../icons/IconDropdown";

const Navbar = ({layout}) => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch= useDispatch();
  const [links,setLinks] = useState([
    {
      name:'Features',
      path:'/#features'
    },
    {
      name:'Testimonials',
      path:'/#testimonials'
    },
    {
      name:'Pricing',
      path:'/#pricing'
    }
  ])

  return (
    <div className={`bg-white sticky top-0 w-full  z-[999] ${layout === 'panel' ? 'border-b border-slate-300 px-2':''}`}>
        <div className={`flex flex-nowrap flex-initial justify-between items-center ${layout ==='home'? 'layoutWidth' :''}`} >
          <div className="flex justify-around items-center gap-x-20">
            <Link to="/" className="flex items-center">
              <img
                src="/logo2.png"
                className="mr-3 h-14 sm:h-16"
                alt="Pharma Logo"
              />
              <span className="hidden md:flex self-center text-3xl font-semibold whitespace-nowrap text-slate-900">
                Pharma Track
              </span>
            </Link>
           <span className='hidden md:flex flex-row justify-around'>
             { layout==='home' && links.map((link) => {
               return (
                   <a   key={link.name}
                        className="flex rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                        href={link.path}
                   >
                     {link.name}
                   </a>
               )
             })
             }
           </span>
          </div>
          <div className="flex items-center md:order-2">
            {!(Object.keys(currentUser).length === 0) ? (
              <div>
                <div  onClick={()=> dispatch(setShowDropdown())} className=" flex flex-row items-center gap-x-3 border rounded-full px-3 py-2 hover:outline hover:outline-1 cursor-pointer">
                  <span> {currentUser.username.substring(0,3)}</span>
                  <IconDropdown color='fill-slate-900'  size='15'/>
                </div>
                {/*<a*/}
                {/*  className={"button z-0"}*/}
                {/*  onClick={() => {*/}
                {/*    logout();*/}
                {/*  }}*/}
                {/*>*/}
                {/*  Log Out*/}
                {/*</a>*/}
              </div>


            ) : (
              <Link to="/sign_in" className={"button z-0"}>
                Log In
              </Link>
            )}
          </div>
        </div>
    </div>
  );
};

export default Navbar;
