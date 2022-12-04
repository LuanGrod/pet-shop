import { configureStore, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"

export const usuario = createSlice({
    name: "usuario",
    initialState: {
        usuario: "",
        email: "",
        produtosCarrinho: [],
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
        }, 
        carrinho: (state, { payload }) => {
            state.produtosCarrinho = [...state.produtosCarrinho, payload.payload]
        },
        esvaziaCarrinho: (state) => {
            console.log("Esvaziando carrinho")
            state.produtosCarrinho = []
        }
    }
})

export const { entrar, sair, carrinho, esvaziaCarrinho } = usuario.actions

export const Usuario = (state) => state.usuario
export const Logado = (state) => state.logado
export const ProdutosCarrinho = (state) => state.produtosCarrinho

const persistConfig = {
    key: "Pet-shop",
    storage
}

const persistedReducer = persistReducer(persistConfig, usuario.reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export const persistor = persistStore(store)

export default store;