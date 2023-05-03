import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoginForm,
  selectLoginFormData,
  setErrorLogin,
  selectErrorPost,
  setCurrentUser,
} from "../stores/userAuthSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { FormEvent } from "react";
import ErrorComponent from "./ErrorComponent";
import {loginFormValidation} from "../utils/functions";

const Login = () => {
  const { loginError } = useSelector(selectErrorPost);
  const loginData = useSelector(selectLoginFormData);
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const navigate = useNavigate();

  const postLoginData = (event: FormEvent) => {
    event.preventDefault();
    loginFormValidation(loginData)
        .then(()=>{
          fetch("http://localhost:3210/api/userAuth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(loginData),
          })
              .then(async (res: any) => {
                if (res.status !== 200) {
                  const data = await res.json();
                  if (res.status == 401) {
                    throw Error(data);
                  }
                  throw Error(data);
                }
                return res.json();
              })
              .then((data: any) => {
                localStorage.setItem("currentUser", JSON.stringify(data));
                dispatch(setCurrentUser(data));
                dispatch(setErrorLogin(null));
                return navigate("/admin");
              })
              .catch((error: any) => {
                dispatch(setErrorLogin(error.message));
              });
        })
        .catch((error:any)=>{
          dispatch(setErrorLogin(error));
        })

  };
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="text-center">
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div className="flex justify-center items-center  bg-white p-8 lg:p-16">
              <div className="grid  p-4">
                <div className=" rounded-lg border border-gray-200 shadow-md p-3 sm:p-8 lg:p-12">
                  <div className="flex justify-center ">
                    <img
                        src="../../public/logo2.png"
                        className="mr-3 h-16 lg:h-24 object-fill "
                        alt="Food Palace Logo"
                    />
                  </div>
                  <div className="my-7 mb-9">
                    <p className="mb-1 block text-xl lg:text-2xl font-normal text-gray-400">
                      Welcome back!
                    </p>
                    <h1 className="block text-2xl lg:text-4xl font-bold mb-2">
                      Login to your account
                    </h1>
                  </div>

                  <form
                    onSubmit={(event: FormEvent) => postLoginData(event)}
                    onChange={(event: any) =>
                      dispatch(
                        setLoginForm({
                          [event.target.name]: event.target.value,
                        })
                      )
                    }
                  >
                    <div className="relative mb-6">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="input_design peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="email"
                        className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        Email Address
                      </label>
                    </div>

                    <div className="relative mb-6">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="input_design peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="password"
                        className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        Password
                      </label>
                    </div>

                    <div className="flex justify-end mb-6">
                      <div>
                        <Link
                          to='/forgot_password'
                          className="text-blue-400 hover:text-blue-500"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                    </div>

                    <button type="submit" className="button px-32 my-2">
                      Sign in
                    </button>

                    <div className="text-sm lg:text-base font-medium text-gray-500 dark:text-gray-300 mr-2 ">
                      Not registered ?
                      <Link
                        to="/sign_up"
                        className="pl-3 text-blue-400 hover:text-blue-700 hover:underline dark:text-blue-500"
                      >
                        Create account
                      </Link>
                    </div>
                  </form>
                  <ErrorComponent fetchError={loginError} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
