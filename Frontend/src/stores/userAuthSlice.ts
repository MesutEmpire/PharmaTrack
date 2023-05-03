import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./mainStore";

const userAuthSLice = createSlice({
  name: "userAuth",
  initialState: {
    sign_upForm: null,
    errorPost: {
      login: null,
      sign_up: null,
      forgotPassword:null,
      resetPassword:null

    },
    loginForm: null,
    forgotPasswordForm:null,
    resetPasswordForm:null,
    currentUser: {},
    isAuthenticated: false,
  },
  reducers: {
    setSignUpForm: (state, action) => {
      state.sign_upForm = { ...state.sign_upForm, ...action.payload };
    },
    setLoginForm: (state, action) => {
      state.loginForm = { ...state.loginForm, ...action.payload };
    },
    setForgotPasswordForm: (state, action) => {
      state.forgotPasswordForm = { ...state.forgotPasswordForm, ...action.payload };
    },
    setResetPasswordForm: (state, action) => {
          state.resetPasswordForm = { ...state.resetPasswordForm, ...action.payload };
      },
    setErrorSignUp: (state, action) => {
      state.errorPost.sign_up = action.payload;
    },
    setErrorLogin: (state, action) => {
      state.errorPost.login = action.payload;
    },
    setErrorForgotPassword: (state, action) => {
      state.errorPost.forgotPassword = action.payload;
    },
    setErrorResetPassword: (state, action) => {
          state.errorPost.resetPassword = action.payload;
      },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logoutCurrentUser: (state) => {
      state.currentUser = {};
      state.isAuthenticated = false;
      state.errorPost.login = null;
      state.errorPost.sign_up = null;
      localStorage.removeItem("auth");
      localStorage.removeItem("currentUser");
      console.log("Success");
    },
  },
});

export const {
  setSignUpForm,
  setLoginForm,
  setForgotPasswordForm,
  setResetPasswordForm,
  setErrorSignUp,
  setErrorLogin,
  setErrorForgotPassword,
  setErrorResetPassword,
  setCurrentUser,
  logoutCurrentUser,
} = userAuthSLice.actions;
export const userAuthReducer = userAuthSLice.reducer;

// export const selectUserAuth = (state: RootState) => state.userAuth;

export const selectErrorPost = (state: RootState) => {
  return {
    signUpError: state.userAuth.errorPost.sign_up,
    loginError: state.userAuth.errorPost.login,
    forgotPasswordError : state.userAuth.errorPost.forgotPassword,
    resetPasswordError:state.userAuth.errorPost.resetPassword

  };
};

export const selectCurrentUser = (state: RootState) =>
  state.userAuth.currentUser;
// export const selectAuth = (state: RootState) =>
//     state.userAuth.isAuthenticated;

export const selectSignUpFormData = (state: RootState) =>
  state.userAuth.sign_upForm;
export const selectLoginFormData = (state: RootState) =>
  state.userAuth.loginForm;
export const selectForgotPasswordFormData = (state: RootState) =>
    state.userAuth.forgotPasswordForm;
export const selectResetPasswordFormData = (state: RootState) =>
    state.userAuth.resetPasswordForm;