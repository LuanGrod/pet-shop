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
    <div className="usuario">
      <h1><b>Usuário Logado</b></h1>
      <p>Nome: {usuario}</p>
      <p>Email :{email}</p>
      <div className='form'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type='button' >Excluir</button> 
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type='button' >Editar</button>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type='button' onClick={desconectar}>Sair</button>
    </div>
  )
}

export default Usuario;
