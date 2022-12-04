import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carrinho, ProdutosCarrinho } from "../../store"


function Carrinho() {
  const dispatch = useDispatch();
  const produtosCarrinhoId = useSelector(ProdutosCarrinho)

  const [produtosCarrinho, setProdutosCarrinho] = useState([])


  useEffect(() => {
    setProdutosCarrinho([])
    produtosCarrinhoId.forEach(item => {
      fetch(`https://pet-shop-aglr-api.vercel.app/produtos/?id=` + item)
        .then(resposta => {
          return resposta.json();
        })
        .then(resposta => {
          setProdutosCarrinho(oldArray => [...oldArray, resposta])
        });
    })
  }, [produtosCarrinhoId])



  const esvaziar = (event) => {
    event.preventDefault();
    dispatch(carrinho({type: "EXCLUDE_ALL_CART"}));
    setProdutosCarrinho([])
  };

  const removeItemCart = (item) => {
    dispatch(carrinho({type: "REMOVE_FROM_CART", payload: item[0]}))
  }


  return (
    <div>
      <div>
        <button className="bg-slate-300" onClick={esvaziar}>Esvaziar</button>
      </div>
      <div>
        {produtosCarrinho.length > 0 ? produtosCarrinho.map(item =>
          <div className="ItemCart border-t-2" key={item[0]}>
            <div className="ItemImg">
              <img id="imagem" src={item[3]} alt="produto" className="w-20 h-20" />
            </div>
            <div className="ItemInfo">
              <h1>{item[1]}</h1>
            </div>
            <div className="ItemPrice">
              <h1 id="preco" className="">R${item[2]}</h1>
            </div>
            <div className="Quantity flex">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">+</button>
              <h2>1</h2>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">-</button>
            </div>
            <div className="ItemRemove">
                <button className="bg-red-500 hover:bg-red-400 text-white font-bold border-b-4 border-red-800 hover:border-red-500 rounded w-40"  onClick={() => removeItemCart(item)}>Remover</button>
            </div>
            <div className="totalValue text-2xl">
                <span>Total: R${item[2]}</span>
            </div>
          </div>
        ) : <h2 className="text-2xl font-extrabold">O carrinho está vazio</h2>}
      </div>
    </div>
  );
}

export default Carrinho;
