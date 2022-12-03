import React from "react";
import Sidebar from './../../components/Sidebar';
import Vitrine from './../../components/Vitrine';

function Produtos() {

  return (
    <div className="flex w-full h-auto justify-center items-center bg-slate-200">
      <Sidebar />
      <Vitrine />
    </div>
  );
}

export default Produtos;
