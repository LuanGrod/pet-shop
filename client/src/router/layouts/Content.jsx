import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from '../pages/Home';
import { Sobre } from '../pages/Sobre';
import { Produtos } from '../pages/Produtos';
import { Carrinho } from '../pages/Carrinho';
import { Me } from '../pages/Me';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';

import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";


export function Content(){

    return (
      <main>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/me" element={<Me />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    );
}

export default Content;
