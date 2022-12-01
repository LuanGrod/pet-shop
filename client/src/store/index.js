import { configureStore, createSlice } from "@reduxjs/toolkit";

export const login = createSlice({
    name: "login",
    initialState:{
        usuario: "",
        password: "",
        email: "",
        logado: false
    },
    reducers: {
        entrar: (state, { payload }) => {
            state.logado = !state.logado
            state.usuario = payload.name
            state.email = payload.email
            state.password = payload.password
            //console.log(state.logado)
        },
        sair: (state) => {
            state.user = null;
        }
    }
})

export const {entrar, sair} = login.actions

export const Usuario = (state) => state.usuario

const store = configureStore({
    reducer: login.reducer
})

export default store;