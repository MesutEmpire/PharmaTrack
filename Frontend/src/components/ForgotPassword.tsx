import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    setForgotPasswordForm,
    selectForgotPasswordFormData,
    setErrorForgotPassword,
    selectErrorPost,
} from "../stores/userAuthSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { FormEvent } from "react";
import ErrorComponent from "./ErrorComponent";

const ForgotPassword = () => {
    const { forgotPasswordError } = useSelector(selectErrorPost);
    const forgotPasswordData = useSelector(selectForgotPasswordFormData);
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

    const postForgotPasswordData = (event: FormEvent) => {
        event.preventDefault();
        fetch(`${import.meta.env.VITE_BACKEND_URL}/userAuth/forgot_password`, {
               method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify(forgotPasswordData),
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
                        dispatch(setErrorForgotPassword(null));
                        console.log(data)
                        // return navigate("/");
                    })
                    .catch((error: any) => {
                        dispatch(setErrorForgotPassword(error.message));
                    });
            }

    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="text-center">
                    <div className="mt-10 lg:max-w-2xl mx-auto bg-white md:max-w-xl sm:max-w-lg gap-x-6">
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
                                        <h1 className="block text-2xl lg:text-4xl font-bold mb-2">
                                            Trouble logging in?
                                        </h1>
                                        <p className="mb-1 block text-xl lg:text-2xl font-normal text-gray-400">

                                            Enter your email and we'll send you a link to get back into your account.
                                        </p>

                                    </div>

                                    <form
                                        onSubmit={(event: FormEvent) => postForgotPasswordData(event)}
                                        onChange={(event: any) =>
                                            dispatch(
                                                setForgotPasswordForm({
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

                                        <button type="submit" className="button px-32 my-2">
                                            Send login link
                                        </button>

                                        <div className="text-sm lg:text-base font-medium text-gray-500 dark:text-gray-300 mr-2 ">

                                            <Link
                                                to="/sign_up"
                                                className="text-blue-400 hover:text-blue-700 hover:underline dark:text-blue-500 block my-4"
                                            >
                                                Create New Account
                                            </Link>
                                            <Link
                                                to="/login"
                                                className="text-blue-400 hover:text-blue-700 hover:underline dark:text-blue-500"
                                            >
                                                Back to Login
                                            </Link>
                                        </div>
                                    </form>
                                    <ErrorComponent fetchError={forgotPasswordError} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
