import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectErrorPost,
  setErrorSignUp,
  setSignUpForm,
  selectSignUpFormData,
} from "../stores/userAuthSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { FormEvent } from "react";
import ErrorComponent from "./ErrorComponent";

const SignUp = () => {
  const signUpData = useSelector(selectSignUpFormData);
  const { signUpError } = useSelector(selectErrorPost);
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const navigate = useNavigate();

  const postData = (event: FormEvent) => {
    event.preventDefault();
    fetch("http://localhost:3210/api/userAuth/sign_up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    })
      .then((res: Response) => {
        if (res.status !== 200) {
          if (res.status == 401) throw Error("Unauthorized Access");
          throw Error("Failed to Register");
        }
        res.json();
      })
      .then(() => navigate("/login"))
      .catch((error: any) => {
        dispatch(setErrorSignUp(error.message));
      });
  };
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="text-center">
          <div className="lg:max-w-2xl mx-auto bg-white md:max-w-xl sm:max-w-lg p-7 lg:p-16">
            <div className="p-4   rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
              <div className="flex justify-center ">
                <img
                  src="../../public/logo2.png"
                  className="mr-3 h-16 lg:h-24 object-fill "
                  alt="Food Palace Logo"
                />
              </div>
              <div className="flex justify-center text-2xl lg:text-4xl  my-7 mb-14 font-bold ">
                Create Account
              </div>
              <form
                onSubmit={(event: FormEvent) => postData(event)}
                onChange={(event: any) =>
                  dispatch(
                    setSignUpForm({ [event.target.name]: event.target.value })
                  )
                }
              >
                <div className="grid gap-6 lg:grid-cols-2 ">
                  <div className="relative ">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="input_design peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="first_name"
                      className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      First Name
                    </label>
                  </div>

                  <div className="relative ">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="input_design peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="last_name"
                      className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      Last Name
                    </label>
                  </div>

                  <div className="relative mb-6">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="input_design peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="phone"
                      className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      Phone Number
                    </label>
                  </div>
                </div>

                <div className="relative mb-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
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
                    name="password"
                    id="password"
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
                <div className="relative mb-6">
                  <input
                    type="number"
                    name="pharmacy"
                    id="pharmacy"
                    className="input_design peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="pharmacy"
                    className="label_design peer-focus:px-2 peer-focus:text-[#71318c] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Pharmacy ID
                  </label>
                </div>
                <button type="submit" className={"button px-36"}>
                  Sign Up
                </button>
              </form>
              <ErrorComponent fetchError={signUpError} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
