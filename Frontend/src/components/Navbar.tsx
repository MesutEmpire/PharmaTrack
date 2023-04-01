import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutCurrentUser, selectCurrentUser } from "../stores/userAuthSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import React from "react";

const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const navigate = useNavigate();

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
    <div className={"bg-white fixed top-0 w-full  z-[999]"}>
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-nowrap justify-between items-center mx-auto">
          <div className="flex justify-evenly items-center gap-x-6">
            <Link to="/" className="flex items-center">
              <img
                src="/logo2.png"
                className="mr-3 h-14 sm:h-16"
                alt="Pharma Logo"
              />
              <span className="self-center text-3xl font-semibold whitespace-nowrap text-slate-900 dark:text-white">
                Pharma Track
              </span>
            </Link>

            <a
              className="flex rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              href="/#features"
            >
              Features
            </a>
            <a
              className=" rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              href="/#testimonials"
            >
              Testimonials
            </a>
            <a
              className="rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              href="/#pricing"
            >
              Pricing
            </a>
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
      </nav>
    </div>
  );
};

export default Navbar;
