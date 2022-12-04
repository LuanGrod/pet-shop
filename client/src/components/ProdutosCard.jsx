import React from "react";
import { TbShoppingCart } from 'react-icons/tb'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import store, { carrinho } from "../store"

function ProdutosCard(props) {
  const urlProduto = `/produtos/${props.item[0]}`;
  const dispatch = useDispatch();

  const nota = [0, 0, 0, 0, 0].fill(<AiOutlineStar />);

  for (let i = 0; i < props.nota; i++) {
    nota.splice(i, 1, <AiFillStar key={i} />);
  }
    //const [produtosCarrinho, setProdutoCarrinho] = useState(pc)
    function addToCart(id) {
      const produtosCarrinho = store.getState().produtosCarrinho
      //console.log(produtosCarrinho)
      let isInCart = false;
        produtosCarrinho.forEach(el => {
          if (id === el) {
            isInCart = true
          }
        })
      
      
      if (!isInCart) {
        //console.log("despachado")
        dispatch(carrinho({type: "ADD_TO_CART", payload: id}))
      }
    }

  return (
    <>
      <div className="grid-cols-3 w-64 m-5 rounded-lg shadow-md bg-white">

        <Link to={urlProduto} className="w-full ">
          <img id="imagem" src={props.item[3]} alt="produto" className="w-48 h-48 p-3 m-auto" />
        </Link>

        <div className="px-5 pb-5">

          <Link to={urlProduto}>
            <p id="descricao" className="text-xl font-semibold tracking-tight text-gray-900">{props.item[1]}</p>
          </Link>

          <div className="flex items-center mt-2.5 mb-5">
            {nota}
            <span className="px-2.5 py-0.5 mr-2  ml-3 bg-blue-100 text-blue-800 text-xs font-semibold  rounded ">{props.nota}</span>
          </div>

          <div className="flex flex-row-reverse justify-between">
            <button type="button" className="px-4 py-2 mr-2 text-xs text-center font-semibold rounded-lg flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-[3px]" onClick={() => addToCart(props.item[0])}>
              <TbShoppingCart className="mr-3 text-lg" />
              Adicionar
            </button>
            <p id="preco" className="text-xl font-semibold tracking-tight text-gray-900">R$ {props.item[2]}</p>

          </div>
        </div>
      </div>

    </>


  );
}

export default ProdutosCard;
