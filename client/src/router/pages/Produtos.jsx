import React from "react";
import Sidebar from './../../components/Sidebar';
import Vitrine from './../../components/Vitrine';

function Produtos() {

  return (
    <div className="flex w-full h-fit pt-7 justify-center items-start">
      <Sidebar />
      <Vitrine />
    </div>
  );
}

export default Produtos;
