import React from "react";
import { useEffect, useState } from "react";
import ProdutosCard from './ProdutosCard';

function Vitrine() {
  const [produtos, setProdutos] = useState([]);

  function buscaProdutos() {
    fetch('http://localhost:6969/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    })
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
    <aside className="flex flex-col w-9/12 ml-5 h-auto ">
      <div>
        <h2 className="font-black text-2xl tracking-wider text-brand-dark">Produtos</h2>
        <p className="pt-3">Nossos produtos são bons, confia :D</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ad accusamus reiciendis nemo quibusdam, soluta repellat hic sunt neque minima autem porro? Ipsum velit hic illo reprehenderit esse voluptates aut.</p>
      </div>
      <div className="mt-6 bg-brand-primary">
        <div className="m-5 flex flex-wrap w-full justify-between gap-y-3">
          {
            produtos.map(item =>
              <ProdutosCard item={item} key={item} />
            )
          }
        </div>
      </div>
    </aside>
  );
}

export default Vitrine;
