import React from "react";

export function Sobre() {
  return (
    <div className="flex flex-col w-screen h-screen justify-start items-start bg-slate-200">
      <div className="p-20 pt-5">
        <h1 className="mt-28 text-6xl">PetShop</h1>
        <p className="mt-20 w-3/5 text-lg">
          Este site é um projeto desenvolvido por alunos do
          Instituto Federal de Educação, Ciência e Tecnologia de São Paulo
          - Campus São Paulo, no quarto período do curso de Tecnologia em
          Análise e Desenvolvimento de Sistemas, para a discplina de Desenvolvimento
          Web 2.
        </p>
        <p className="text-2xl mt-10 text-brand-tertiary">
          <a href="https://github.com/LuanGrod/pet-shop">GITHUB DO PROJETO</a>
        </p>
      </div>
    </div>
  );
}

export default Sobre;
