import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import store, { carrinho, ProdutosCarrinho } from "../../store"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Carrinho() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logadoEstado = store.getState().logado;

  const produtosCarrinho = useSelector(ProdutosCarrinho)
  const itens = produtosCarrinho.reduce(function (soma, i) {return soma + i[4];}, 0)
  const preco = produtosCarrinho.reduce(function (soma, i) {return Number(soma) + (Number(i[2])*i[4])}, 0)

  const [totalItem, setTotalItem] = useState(itens)
  const [totalPreco, setTotalPreco] = useState(preco)

  useEffect(() => {
    setTotalItem(itens)
    setTotalPreco(preco)
    console.log(preco)
  }, [produtosCarrinho])

  

  const esvaziar = () => {
    dispatch(carrinho({ type: "EXCLUDE_ALL_CART" }));
  };

  const removeItemCart = (id) => {
    dispatch(carrinho({ type: "REMOVE_FROM_CART", payload: id }))
  }

  const finalizaCompra = () => {
    if (!logadoEstado) {
      alert("Você precisa estar logado")
      navigate('/login')
    } else {
      alert("Compra finalizada!! Volte sempre :)")
      esvaziar()
      navigate('/')
    }
  }

  const increment = (id) => {
    dispatch(carrinho({ type: "INCREMENT_PRODUCT", payload: id }))
  }

  const decrement = (id, quant) => {
    if (quant > 1) {
      dispatch(carrinho({ type: "DECREMENT_PRODUCT", payload: id }))
    } else {
      removeItemCart(id)
    }

  }


  return (
    <div className=" bg-slate-200 h-screen">
      <div>
        <button className="bg-slate-300" onClick={esvaziar}>Esvaziar</button>
      </div>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10 ">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Carrinho</h1>
              <h2 className="font-semibold text-2xl">{totalItem} Itens</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Detalhes do produto</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantidade</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Preço</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
            </div>
            {produtosCarrinho.length > 0 ?
              produtosCarrinho.map(item =>
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={item[0]}>
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img id="imagem" src={item[3]} alt="produto" className="w-20 h-20" />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <h1 className="">{item[1]}</h1>
                      <button className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => removeItemCart(item[0])}>Remover</button>
                    </div>
                  </div>

                  <div className="quantidade flex  w-1/5 items-center	justify-center">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-2 border border-blue-500 hover:border-transparent rounded" onClick={() => decrement(item[0], item[4])}>-</button>
                    <h2 className="px-3">{item[4]}</h2>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-2 border border-blue-500 hover:border-transparent rounded" onClick={() => increment(item[0])}>+</button>
                  </div>

                  <div className="text-center w-1/5 font-semibold text-sm">
                    <h1 id="preco">R${item[2]}</h1>
                  </div>


                  <div className="text-center w-1/5 font-semibold text-sm">
                    <span>Total: R${Number(item[2]) * item[4]}</span>
                  </div>


                </div>
              ) : <h2 className="text-2xl font-extrabold">O carrinho está vazio</h2>}


          </div>
          <div id="summary" className="flex-col justify-between w-1/4 px-8 py-10 relative">
            <h1 className="font-semibold text-2xl border-b pb-8">Infos do Pedido</h1>
            <div>
              <h3 className="font-semibold text-1xl">Total(R$): </h3>
              <h4 className="font-semibold text-4xl mt-3">R$ {totalPreco}</h4>
            </div>
            {produtosCarrinho.length > 0 ? 
            <div>
            <button className="absolute bottom-5 text-2xl text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2" onClick={finalizaCompra}>Finalizar Compra</button>
          </div>
          : <></>}
            

          </div>

        </div>

      </div>


    </div>
  );
}

export default Carrinho;
