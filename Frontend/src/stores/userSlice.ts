import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./mainStore";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    error: null as unknown,
    searchedUser: null,
    foundSearchUsers: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setErrorUsers: (state, action) => {
      state.error = action.payload;
    },
    setSearchedUser: (state, action) => {
      state.searchedUser = action.payload;
      if (state.searchedUser != null) {
        state.foundSearchUsers = state.users.filter((user: any) =>
          `${user.username}`
            .toLowerCase()
            .includes(state.searchedUser.toLowerCase())
        );
      }
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUsers, setErrorUsers, setSearchedUser } = userSlice.actions;
export const selectUser = (state: RootState) => {
  if (state.user.searchedUser) {
    return { users: state.user.foundSearchUsers, error: state.user.error };
  }
  return { users: state.user.users, error: state.user.error };
};
