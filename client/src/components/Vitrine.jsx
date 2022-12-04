import React from "react";
import { useEffect, useState } from "react";
import store, { carrinho } from "../store"
import { useDispatch } from "react-redux";

function Vitrine() {
  const [produtos, setProdutos] = useState([]);
  const dispatch = useDispatch();

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

  

  //const [produtosCarrinho, setProdutoCarrinho] = useState(pc)


  function addToCart(id) {
    const produtosCarrinho = store.getState().produtosCarrinho
    let isInCart = false;
    produtosCarrinho.forEach(el => {
      if (id === el) {
        isInCart = true
      }
    })
    if (!isInCart) {
      console.log("despachado")
      dispatch(carrinho({type: "ADD_TO_CART", payload: id}))
    }
  }

  


  return (
    <aside className="flex flex-wrap justify-between w-3/5 h-auto ml-5 bg-brand-primary">
      {
        produtos.map(item =>
          <div key={item} className="m-4 p-3">
            <img id="imagem" src={item[3]} alt="produto" className="w-20 h-20" />
            <h1 id="descricao">{item[1]}</h1>
            <h1 id="preco" className="text-2xl">{item[2]}</h1>
            <button className="bg-slate-300" onClick={() => addToCart(item[0])}>Adicionar ao carrinho</button>
          </div>
        )
      }
    </aside>
  );
}

export default Vitrine;
