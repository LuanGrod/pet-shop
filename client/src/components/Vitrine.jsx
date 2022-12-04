import React from "react";
import { useEffect, useState } from "react";
import ProdutosCard from './ProdutosCard';

function Vitrine() {
  const [produtos, setProdutos] = useState([]);

  function buscaProdutos() {
    fetch(`https://pet-shop-aglr-api.vercel.app/produtos`)
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


  function gerarNota() {
    return Math.floor(Math.random() * 5 + 1);
  }

  return (
    <aside className="flex flex-col w-9/12 ml-5 h-auto ">
      <div>
        <h2 className="font-black text-2xl tracking-wider text-brand-dark">Produtos</h2>
        <p className="pt-3">Nossos produtos são bons, confia :D</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ad accusamus reiciendis nemo quibusdam, soluta repellat hic sunt neque minima autem porro? Ipsum velit hic illo reprehenderit esse voluptates aut.</p>
      </div>
      <div className="mt-6 bg-brand-primary">
        <div className="flex flex-wrap w-full justify-evenly">
          {
            produtos.map(item =>
              <ProdutosCard item={item} key={item} nota={gerarNota()} />
            )
          }
        </div>
      </div>
    </aside>
  )



}

export default Vitrine;
