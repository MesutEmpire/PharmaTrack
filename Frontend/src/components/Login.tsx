import {Link, useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {setLoginForm, selectLoginFormData, setErrorLogin,selectErrorPost,setCurrentUser} from "../stores/userAuthSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import {FormEvent} from "react";
import ErrorComponent from "./ErrorComponent";

const Login = ()=>{
    const {loginError} = useSelector(selectErrorPost)
    const loginData = useSelector(selectLoginFormData)
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const navigate = useNavigate()

    const postLoginData = (event: FormEvent) => {
        event.preventDefault();
        fetch(
            "http://localhost:3210/api/userAuth/login",
            {
                method:'POST',
                headers: {'Content-Type':'application/json'},
                credentials: 'include',
                body: JSON.stringify(loginData)
            }
        )
            .then(async (res:any)=>{
                if(res.status !== 200) {
                    const data = await res.json()
                    if (res.status == 401) {
                        throw Error(data)
                    }
                    throw Error(data)
                }
                return res.json()

            })
            .then((data:any)=> {
            localStorage.setItem("currentUser",JSON.stringify(data))
                dispatch(setCurrentUser(data))
                    return navigate('/admin')
            })
            .catch((error:any)=>{
                dispatch(setErrorLogin(error.message))
            })
    };
    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="text-center">
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                            <div className="flex justify-center items-center  bg-white p-8 lg:p-16">
                                <div className="grid  p-4">
                                    <div
                                        className=" rounded-lg border border-gray-200 shadow-md p-3 sm:p-8 lg:p-12"
                                    >
                                        <div className="my-7 mb-9">
                                            <p className="mb-1 block text-xl lg:text-2xl font-normal text-gray-400">
                                                Welcome back!
                                            </p>
                                            <h1 className="block text-2xl lg:text-4xl font-bold mb-2">
                                                Login to your account
                                            </h1>
                                        </div>

                                        <form    onSubmit={(event: FormEvent) => postLoginData(event)}
                                                 onChange={(event: any) =>
                                                     dispatch(setLoginForm({ [event.target.name]: event.target.value }))
                                                 } >
                                        <div className="relative mb-6">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="input_design peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label htmlFor="email"
                                                className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                            >
                                                Email Address</label>
                                        </div>

                                        <div className="relative mb-6">
                                            <input
                                                type="password"
                                                id='password'
                                                name="password"
                                                className="input_design peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                htmlFor="password"
                                                className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                            >
                                                Password</label
                                            >
                                        </div>

                                        <div className="flex justify-between mb-6">
                                            <div className="flex items-center">
                                                <input
                                                    name="remember_me"
                                                    type="checkbox"
                                                    className="mr-2 h-5 w-5 bg-[#71318c] focus:ring-[#71318c] border-gray-300 rounded-lg"
                                                />
                                                <label
                                                    htmlFor="remember_me"
                                                    className="text-sm lg:text-base font-normal text-gray-900"
                                                >
                                                    Remember me
                                                </label>
                                            </div>

                                            <div>
                                                <a href="#" className="text-blue-400 hover:text-blue-500">
                                                    Forgot your password?
                                                </a>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="button px-32 my-2"
                                        >
                                            Sign in
                                        </button>

                                        <div
                                            className="text-sm lg:text-base font-medium text-gray-500 dark:text-gray-300 mr-2 "
                                        >
                                            Not registered ?
                                            <Link
                                                to="/sign_up"
                                                className="text-blue-400 hover:text-blue-700 hover:underline dark:text-blue-500"
                                            >Create account
                                            </Link>
                                        </div>

                                        {/*<div*/}
                                        {/*    v-if="false"*/}
                                        {/*    className="p-4 mb-4 text-sm lg:text-base text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"*/}
                                        {/*    role="alert"*/}
                                        {/*>*/}
                                        {/*    <span className="font-medium">Login Successful </span> Welcome*/}
                                        {/*</div>*/}
                                        {/*<div*/}
                                        {/*    v-if="false"*/}
                                        {/*    className="p-4 mb-4 text-sm lg:text-base text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"*/}
                                        {/*    role="alert"*/}
                                        {/*>*/}
                                        {/*    <span className="font-medium">User not found! </span> Input Correct*/}
                                        {/*    Email Address or Password*/}
                                        {/*</div>*/}
                                    </form>
                                        <ErrorComponent fetchError={loginError}/>
                                </div>
                            </div>
                    </div>
                    {/*<div v-if="store.getAuthError">*/}
                    {/*    {{store.getAuthError}}*/}
                    {/*</div>*/}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login