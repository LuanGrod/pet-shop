import React from "react";
import { useEffect, useState } from "react";

function Vitrine() {
  const [produtos, setProdutos] = useState([]);
 
    function buscaProdutos() {
      fetch(`http://localhost:6969/produtos`)
      .then(resposta => {
          return resposta.json();
      })
      .then(resposta => {
          const vetor = Object.values(resposta);
          setProdutos(vetor);
      });
    }
     
    useEffect(() => {
      buscaProdutos() 
    }, [])

  return (
    <aside className="flex flex-wrap justify-between w-3/5 h-auto ml-5 bg-brand-primary">
      {    
      produtos.map(item => 
          <div key={item} className="m-4 p-3">
            <img id="imagem" src={item[2]} alt="produto" className="w-20 h-20"/>
            <h1 id="descricao">{item[0]}</h1> 
            <h1 id="preco" className="text-2xl">{item[1]}</h1>
            <button className="bg-slate-300">Adicionar ao carrinho</button>
          </div>
          )
      }
    </aside>
  );
}

export default Vitrine;
