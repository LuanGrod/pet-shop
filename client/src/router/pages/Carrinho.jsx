import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store, { carrinho, ProdutosCarrinho } from "../../store"
import { useNavigate } from "react-router-dom";


function Carrinho() {
  const dispatch = useDispatch();
  const produtosCarrinho = useSelector(ProdutosCarrinho)
  const navigate = useNavigate();
  const logadoEstado = store.getState().logado;

  const esvaziar = () => {
    dispatch(carrinho({type: "EXCLUDE_ALL_CART"}));
  };

  const removeItemCart = (id) => {
    dispatch(carrinho({type: "REMOVE_FROM_CART", payload: id}))
  }

  const finalizaCompra = () => {
    if(!logadoEstado){
      alert("Você precisa estar logado")
      navigate('/login')
    }else{
      alert("Compra finalizada!! Volte sempre :)")
      esvaziar()
      navigate('/')
    }
  }

  const increment = (id) => {
    dispatch(carrinho({type: "INCREMENT_PRODUCT", payload: id}))
  }

  const decrement = (id, quant) => {
    if(quant > 1){
      dispatch(carrinho({type: "DECREMENT_PRODUCT", payload: id}))
    }else{
      removeItemCart(id)
    }
    
  }

  return (
    <div className="w-screen h-screen bg-slate-200">
      <div>
        <button className="bg-slate-300" onClick={esvaziar}>Esvaziar</button>
      </div>
      <div>
        {produtosCarrinho.length > 0 ? produtosCarrinho.map(item =>
          <div className="ItemCart border-t-2 " key={item[0]}>
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
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => decrement(item[0], item[4])}>-</button>
              <h2>{item[4]}</h2>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => increment(item[0])}>+</button>
            </div>
            <div className="ItemRemove">
                <button className="bg-red-500 hover:bg-red-400 text-white font-bold border-b-4 border-red-800 hover:border-red-500 rounded w-40"  onClick={() => removeItemCart(item[0])}>Remover</button>
            </div>
            <div className="totalValue text-2xl">
                <span>Total: R${Number(item[2])*item[4]}</span>
            </div>
          </div>
        ) : <h2 className="text-2xl font-extrabold">O carrinho está vazio</h2>}
      </div>
      {
        produtosCarrinho.length > 0 ? 
        <div>
          <button className="text-2xl text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2" onClick={finalizaCompra}>Finalizar Compra</button>
        </div>
        
        
        
        : <p></p>
      }
      
    </div>
  );
}

export default Carrinho;
