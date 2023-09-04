import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutCurrentUser, selectCurrentUser } from "../stores/userAuthSlice";
import React, {useState} from "react";

const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch= useDispatch();
  const navigate = useNavigate();
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

  console.log(links)

  const logout = () => {
    fetch("http://localhost:3210/api/userAuth/logout")
      .then(async (res: any) => {
        if (res.status !== 200) {
          const data = await res.json();
          if (res.status == 401) {
            throw Error(data);
          }
          throw Error(data);
        }
        return dispatch(logoutCurrentUser());
      })
      .then(() => {
        return navigate("/");
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  };
  return (
    <div className={"bg-white sticky top-0 w-full  z-[999] "}>
        <div className="flex flex-nowrap flex-initial justify-between items-center layoutWidth">
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
             { links.map((link) => {
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
                <a
                  className={"button z-0"}
                  onClick={() => {
                    logout();
                  }}
                >
                  Log Out
                </a>
              </div>
            ) : (
              <Link to="/login" className={"button z-0"}>
                Log In
              </Link>
            )}
          </div>
        </div>
    </div>
  );
};

export default Navbar;
