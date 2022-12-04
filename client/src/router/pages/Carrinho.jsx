import React from "react";
import { useDispatch } from "react-redux";
import { esvaziaCarrinho } from "../../store"


function Carrinho() {
  const dispatch = useDispatch();

  const esvaziar = (event) => {
    event.preventDefault();
    dispatch(esvaziaCarrinho());
  };

  return (
    <div>
      <button className="bg-slate-300" onClick={esvaziar}>Esvaziar</button>
    </div>
  );
}

export default Carrinho;
