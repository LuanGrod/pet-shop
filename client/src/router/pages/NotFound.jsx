import React from "react";
import { Link } from "react-router-dom";

export function NotFound(){
  return (
    <div className="flex flex-col w-screen h-screen justify-start items-center bg-slate-200">
      <h1 className="text-7xl p-28">Erro! Página não encontrada.</h1>
      <Link to="/" className="text-4xl p-7 text-brand-dark bg-brand-yellow border-brand-dark border-2 rounded-2xl">Voltar ao início</Link>
    </div>
  );
}

export default NotFound;
