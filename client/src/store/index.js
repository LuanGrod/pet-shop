import { configureStore, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
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
        entrar: (state, { payload }) => {
            state.logado = !state.logado
            state.usuario = payload.username
            state.email = payload.email
            state.carrinho = payload.carrinho
            //console.log(state.logado)
        },
        sair: (state) => {
            state.logado = !state.logado;
            state.usuario = "";
            state.email = "";
        }
    }
})

export const { login, logout } = usuario.actions

export const Usuario = (state) => state.usuario

const persistConfig = {
    key: "Pet-shop",
    storage
}

const persistedReducer = persistReducer(persistConfig, login.reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export const persistor = persistStore(store)

export default store;