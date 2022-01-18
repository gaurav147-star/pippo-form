import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: "Hi you are logged in!",
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { login } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;