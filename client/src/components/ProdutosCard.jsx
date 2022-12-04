import React from "react";

function ProdutosCard(props) {
  return (
    <div className="max-w-full w-52 h-72 bg-red-400">
      <img id="imagem" src={props.item[2]} alt="produto" className="" />
      <p id="descricao" >{props.item[0]}</p>
      <p id="preco" className="" >{props.item[1]}</p>
      <button className="" >Adicionar ao carrinho</button>
    </div>
  );
}

export default ProdutosCard;
