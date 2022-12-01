import { configureStore, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        user: null,
        password: null
    },
    reducers: {
        login: (state, action) => {
            state.name = action.payload
            console.log("Usuario: " + JSON.stringify(state.name) )
        },
        logout: (state) => {
            state.user = null;
        }
    }
})

export const {login, logout} = userSlice.actions

export const selectUser = (state) => state.user.user

const store = configureStore({
    reducer: userSlice.reducer
})

export default store;