import {Link, useLocation, useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    setResetPasswordForm,
    selectResetPasswordFormData,
    setErrorResetPassword,
    selectErrorPost
} from "../stores/userAuthSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { FormEvent } from "react";
import ErrorComponent from "./ErrorComponent";
import {signupFormValidation} from "../utils/functions";
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const { resetPasswordError } = useSelector(selectErrorPost);
    const resetPasswordData = useSelector(selectResetPasswordFormData);
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const navigate = useNavigate();
    const { data_id } = useParams();
    const location = useLocation();
    const searchParams:URLSearchParams = new URLSearchParams(location.search);
    const token = searchParams.get('data');

    const postResetData = (event: FormEvent) => {
        event.preventDefault();
        signupFormValidation(resetPasswordData)
            .then(()=> {
                fetch(`${import.meta.env.VITE_BACKEND_URL}/userAuth/reset_password`, {
                    method: "PATCH",
                    headers: {"Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,},
                    credentials: "include",
                    body: JSON.stringify(
                {
                    data_id:data_id,...resetPasswordData
                    }),
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
                        dispatch(setErrorResetPassword(null));
                        return navigate("/login");
                    })
                    .catch((error: any) => {
                        dispatch(setErrorResetPassword(error.message));
                    });
            })
            .catch((error:any)=>{
                dispatch(setErrorResetPassword(error));
            })
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
                                            Reset Password
                                        </h1>
                                        <p className="mb-1 block text-xl lg:text-2xl font-normal text-gray-400">

                                            Enter your new password.
                                        </p>

                                    </div>

                                    <form
                                        onSubmit={(event: FormEvent) => postResetData(event)}
                                        onChange={(event: any) =>
                                            dispatch(
                                                setResetPasswordForm({
                                                    [event.target.name]: event.target.value,
                                                })
                                            )
                                        }
                                    >
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
                                                New Password
                                            </label>
                                        </div>
                                        <div className="relative mb-6">
                                            <input
                                                type="password"
                                                name="confirm_password"
                                                id="confirm_password"
                                                className="input_design peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                htmlFor="confirm_password"
                                                className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                            >
                                                Confirm Password
                                            </label>
                                        </div>
                                        <button type="submit" className="button px-32 my-2">
                                            Change Password
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
                                    <ErrorComponent fetchError={resetPasswordError} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
