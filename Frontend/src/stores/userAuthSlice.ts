import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./mainStore";
import {redirect} from "react-router-dom";
// import { IRegistration_Form } from "../intetfaces/Interfaces";
export const createNewUser= createAsyncThunk(
    "user/createNewUser",
    async (formValues, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;

        const response = await fetch(
            "http://localhost:3210/api/userAuth/sign_up",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...state.userAuth.sign_upForm,
                    ...formValues,
                }),
            }
        );

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data);
        }

        const data = await response.json();

        return data;
    }
);
export const loginUser= createAsyncThunk(
    "user/loginUser",
    async (formValues, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;

        const response = await fetch(
            "http://localhost:3210/api/userAuth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...state.userAuth.loginForm,
                    ...formValues,
                }),
            }
        );

        if (!response.ok) {
            const data = await response.json();
            console.log(response.headers)
            throw new Error(data);
        }

        const data = await response.json();
        return data;
    }
);
export const logoutUser= createAsyncThunk(
    "user/logoutUser",
    async (formValues, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;

        const response = await fetch(
            "http://localhost:3210/api/userAuth/logout");

        if (!response.ok) {
            const data = await response.json();
            console.log(response.headers)
            throw new Error(data);
        }

        const data = await response.json();

        return data;
    }
);
export const authUser = createAsyncThunk(
    "user/authUser",
    async () => {
        const response = await fetch(
            "http://localhost:3210/api/authUser"
        );
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data);
        }

        return data;
    }
);

const userAuthSLice = createSlice({
    name: "userAuth",
    initialState: {
        sign_upForm : null,
        errorPost: {
            login:null,
            sign_up:null,
        },
        loginForm : null,
        currentUser : {},
        isauthenicated : false
    },
    reducers: {
        setSignUpForm: (state, action) => {
            state.sign_upForm = { ...state.sign_upForm, ...action.payload };
        },
        setLoginForm: (state, action) => {
            state.loginForm = { ...state.loginForm, ...action.payload };
        },
        setErrorSignUp: (state, action) => {
            state.errorPost.sign_up = action.payload
        },
        setErrorLogin: (state, action) => {
            state.errorPost.login = action.payload
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        logoutCurrentUser:(state) => {
            state.currentUser = {};
            state.isauthenicated = false;
            state.errorPost.login = null;
            state.errorPost.sign_up = null;
            localStorage.removeItem('auth')
            localStorage.removeItem('currentUser')
            console.log("Success");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createNewUser.pending, (state) => {
                console.log("Pending");
                state.errorPost = null;
            })
            .addCase(createNewUser.fulfilled, (state, action) => {
                // You can update the state here if needed
                state.sign_upForm = null;
                state.errorPost = null;
                state.currentUser = action.payload
                console.log("Success");
            })
            .addCase(createNewUser.rejected, (state, action) => {
                console.log("Error");
                state.errorPost = action.error.message;
            })
            .addCase(loginUser.pending, (state) => {
                console.log("Pending");
                state.errorPost = null;
                localStorage.setItem("auth",String(false))
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                // You can update the state here if needed
                state.sign_upForm = null;
                state.errorPost = null;
                state.currentUser = action.payload;
                state.isauthenicated = true
                localStorage.setItem("auth",String(true))
                localStorage.setItem("currentUser",JSON.stringify(action.payload))
                console.log("Success");
                redirect('/')

            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log("Error");
                localStorage.setItem("auth",String(false))
                state.errorPost = action.error.message;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                // You can update the state here if needed
                state.currentUser = null;
                state.isauthenicated = false;
                state.errorPost.login = null;
                state.errorPost.sign_up = null;
                localStorage.removeItem('auth')
                localStorage.removeItem('currentUser')
                console.log("Success");
            })
            // .addCase(authUser.pending, (state) => {
            //     console.log("Pending");
            //     state.errorPost = null;
            // })
            // .addCase(authUser.fulfilled, (state, action) => {
            //     state.isauthenicated = true
            //     state.errorPost = null;
            //     console.log("Success");
            // })
            // .addCase(authUser.rejected, (state, action) => {
            //     console.log("ErrorComponent");
            //     state.isauthenicated = false
            //     state.errorPost = action.error.message;
            // })
    },
});

export const { setSignUpForm,setLoginForm ,setErrorSignUp,setErrorLogin,setCurrentUser,logoutCurrentUser} = userAuthSLice.actions;
export const userAuthReducer = userAuthSLice.reducer;

export const selectUserAuth = (state: RootState) => state.userAuth;

export const selectErrorPost = (state: RootState) => {
    return {
        signUpError: state.userAuth.errorPost.sign_up,
        loginError: state.userAuth.errorPost.login
    }
};

export const selectCurrentUser = (state: RootState) =>
    state.userAuth.currentUser;
export const selectAuth = (state: RootState) =>
    state.userAuth.isauthenicated;

export const selectSignUpFormData = (state: RootState) =>
    state.userAuth.sign_upForm;
export const selectLoginFormData = (state: RootState) =>
    state.userAuth.loginForm;