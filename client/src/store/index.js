import { configureStore, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"

export const login = createSlice({
    name: "login",
    initialState:{
        usuario: "",
        email: "",
        logado: false
    },
    reducers: {
        entrar: (state, { payload }) => {
            state.logado = !state.logado
            state.usuario = payload.username
            state.email = payload.email
        },
        sair: (state) => {
            state.logado = !state.logado;
            state.usuario = "";
            state.email = "";
        }
    }
})

export const {entrar, sair} = login.actions

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