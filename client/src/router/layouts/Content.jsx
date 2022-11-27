import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from '../pages/Home';
import { Sobre } from '../pages/Sobre';
import { Produtos } from '../pages/Produtos';
import { Carrinho } from '../pages/Carrinho';
import { Auth } from '../pages/Auth';
import { Me } from '../pages/Me';
import { NotFound } from '../pages/NotFound';


export class Content extends Component {
  render() {
    return (
      <main>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/me" element={<Me />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    );
  }
}

export default Content;
