import { configureStore, createSlice } from "@reduxjs/toolkit";
import initialStateProdutos from './produtos.json'

export const usuario = createSlice({
    name: "usuario",
    initialState: {
        usuario: "",
        email: "",
        carrinho: [],
        logado: false
    },
    reducers: {
        login: (state, { payload }) => {
            state.logado = !state.logado
            state.usuario = payload.name
            state.email = payload.email
            state.carrinho = payload.carrinho
            //console.log(state.logado)
        },
        logout: (state) => {
            state.user = null;
        }
    }
})

export const { login, logout } = usuario.actions

export const Usuario = (state) => state.usuario

const store = configureStore({
    reducer: usuario.reducer
})

export default store;