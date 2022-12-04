import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sair } from '../../store';
import store from '../../store';

export function Usuario() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState();
  const [email, setEmail] = useState()
  const logadoEstado = store.getState().logado;

  useEffect(() => {
    if (!logadoEstado) {
      navigate('/login');
    } else {
      setUsuario(store.getState().usuario);
      setEmail(store.getState().email);
    }
  }, [logadoEstado, navigate]);

  const desconectar = (event) => {
    event.preventDefault();
    dispatch(sair());
    navigate('/');
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col	justify-between items-center w-60 mt-20 ">
        <h1><b>Usuário Logado</b></h1>
        <p>Nome: {usuario}</p>
        <p>Email: {email}</p>
        <div className='py-6 flex justify-around w-60'>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" type='button' >Excluir</button>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" type='button' >Editar</button>
        </div>
        <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-800 hover:border-red-500 rounded w-1/2" type='button' onClick={desconectar}>Sair</button>
      </div>

    </div>
  )
}

export default Usuario;
