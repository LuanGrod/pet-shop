import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Produtos from '../pages/Produtos';
import Carrinho from '../pages/Carrinho';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Cadastro from "../pages/Cadastro";
import Usuario from './../pages/Usuario';

export function Content() {

  return (
    <main className="h-fit bg-gray-50">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default Content;
