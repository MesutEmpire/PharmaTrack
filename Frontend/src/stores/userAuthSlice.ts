import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./mainStore";

const userAuthSLice = createSlice({
  name: "userAuth",
  initialState: {
    sign_upForm: null,
    errorPost: {
      login: null,
      sign_up: null,
    },
    loginForm: null,
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
    setErrorSignUp: (state, action) => {
      state.errorPost.sign_up = action.payload;
    },
    setErrorLogin: (state, action) => {
      state.errorPost.login = action.payload;
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
  setErrorSignUp,
  setErrorLogin,
  setCurrentUser,
  logoutCurrentUser,
} = userAuthSLice.actions;
export const userAuthReducer = userAuthSLice.reducer;

// export const selectUserAuth = (state: RootState) => state.userAuth;

export const selectErrorPost = (state: RootState) => {
  return {
    signUpError: state.userAuth.errorPost.sign_up,
    loginError: state.userAuth.errorPost.login,
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
