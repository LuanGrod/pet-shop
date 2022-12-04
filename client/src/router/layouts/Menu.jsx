import { Link, useNavigate } from "react-router-dom";
import { TbShoppingCart, TbUserCircle } from "react-icons/tb"
import { Logado, Usuario, sair } from "../../store"

import logo from '../../assets/cat-logo.png'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Menu() {
  const user = useSelector(Usuario)
  const logado = useSelector(Logado)
  const [usuarioLogado, setUsuarioLogado] = useState(user)

  const [autenticado, setAutenticado] = useState(logado)
  const [menuToggle, setMenuToggle] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setUsuarioLogado(user)
  }, [user]);

  useEffect(() => {
    setAutenticado(logado)
  }, [logado]);

  const desconectar = (event) => {
    event.preventDefault();
    dispatch(sair());
    navigate('/');
  };

  return (
    <nav className="w-auto h-20 flex justify-between bg-brand-dark z-50 sticky top-0">
      <div className="h-full flex">  {/* left */}
        <Link to="/" className="my-auto w-20 h-20 text-heading text-white "><img src={logo} alt="logo" className="ml-6" /></Link>
        {
          usuarioLogado ? <div className="my-auto p-7 text-yellow-400">Olá, <b>{usuarioLogado}</b></div> : ""
        }
      </div>
      <div className="h-full flex"> {/* right */}

        <Link to="/" className="my-auto p-7 text-white hover:bg-brand-tertiary-opacity-50">Home</Link>
        <Link to="/produtos" className="my-auto p-7 text-white hover:bg-brand-tertiary-opacity-50 ">Produtos</Link>
        <Link to="/sobre" className="my-auto p-7 text-white hover:bg-brand-tertiary-opacity-50 ">Sobre</Link>
        <Link to="/carrinho" className=" h-full flex my-auto p-7 text-white hover:bg-brand-tertiary-opacity-50 m-auto "><TbShoppingCart className="m-0 text-2xl" /><p className="grid place-items-center bg-red-600 rounded-lg w-5">4</p></Link>
        <button onClick={e => setMenuToggle(!menuToggle)} className=" my-auto p-7 text-white hover:bg-brand-tertiary-opacity-50 m-auto"><TbUserCircle className="m-0 text-2xl" /></button>
        {
          menuToggle ?
            <div className="z-50 absolute w-64 h-fit px-5 pt-7 pb-6 right-5 top-24 bg-brand-primary rounded-xl ease-in-out duration-300">
              <div className="flex flex-col justify-center align-middle gap-4">
                {
                  autenticado ?
                    <>
                      <Link to="/usuario" className="py-4 rounded-lg bg-green-400 text-white text-center text-lg font-bold tracking-widest ">Perfil</Link>
                      <hr className="w-auto border-gray-400" />
                      <button className="py-1 rounded-lg bg-red-400 text-white text-center text-base font-bold tracking-widest" type='button' onClick={desconectar}>Sair</button>
                    </>
                    :
                    <>
                      <Link to="/login" className="my-auto py-4 rounded-lg bg-green-400 text-white text-center text-lg font-bold tracking-widest">Entrar</Link>
                      <span>Não tem conta? <Link to="/cadastro" className="text-blue-600">Cadastre-se</Link></span>
                    </>
                }
              </div>
            </div>
            : ""
        }

      </div>

    </nav>
  );
}

export default Menu;
