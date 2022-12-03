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
    <aside className="flex w-3/5 h-auto ml-5 bg-brand-primary">
      {    
      produtos.map(item => 
          <div className="m-4 p-3">
            <img src={item[2]} className="w-20 h-20"/>
            <h1>{item[0]}</h1> 
            <h1>{item[1]}</h1>
            <button className="bg-slate-600">Adicionar ao carrinho</button>
          </div>
          )
      }
    </aside>
  );
}

export default Vitrine;
