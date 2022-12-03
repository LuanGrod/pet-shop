import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col w-auto h-screen justify-center items-center bg-slate-200">
      <h1 className="text-7xl">Erro! Página não encontrada.</h1>
      <Link to="/" className="text-2xl mt-8 px-5 py-4 text-brand-dark bg-brand-yellow-opacity-75 border-brand-dark hover:bg-brand-yellow ease-in duration-300 border-2 rounded-xl">Voltar ao início</Link>
    </div>
  );
}

export default NotFound;
