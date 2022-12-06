import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { refreshUsuario, sair } from '../../store';
import store from '../../store';

export function Usuario() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState();
  const [email, setEmail] = useState();
  const [newPassword, setNewPassword] = useState();
  const [password, setPassword] = useState();
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [updateToggle, setUpdateToggle] = useState(false);
  const [validado, setValidado] = useState(false);
  const [erro, setErro] = useState("");
  const logadoEstado = store.getState().logado;

  useEffect(() => {
    if (!logadoEstado) {
      navigate('/login');
    } else {
      setUsuario(store.getState().usuario);
      setEmail(store.getState().email);
    }
  }, [logadoEstado, navigate]);

  const desconectar = () => {
    dispatch(sair());
    navigate('/');
  };

  //Verifica se a senha está correta para alterações.
  const autenticacaoPost = () => {
    fetch('http://localhost:6969/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: new URLSearchParams({
        username: usuario,
        password: password,
      })
    })
      .then(resposta => {
        return resposta.json();
      })
      .then(resposta => {
        if (resposta.username === usuario && resposta.email === email) { //se retornar sucesso
          setValidado(true);
          setErro("");
        }
        else{
          setErro("Senha incorreta!");
        }
      });
  }

  //Realiza a deleção.
  const deleteDelete = (e) => {
    e.preventDefault();
    autenticacaoPost();
    if(validado){
      fetch('http://localhost:6969/usuario', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: new URLSearchParams({
        username: usuario
      })
    })
      .then(resposta => {
        return resposta.json();
      })
      .then(resposta => {
        if (resposta === "Usuário removido com sucesso!") { //se retornar sucesso
          alert(resposta);
          desconectar();
        }
        else{
          setErro("Não foi possível realizar a exclusão!");
        }
      });
    }
  }

    //Realiza a atualização.
    const updatePut = (e) => {
      e.preventDefault();
      autenticacaoPost();
      if(validado){
        fetch('http://localhost:6969/usuario', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        body: new URLSearchParams({
          username: usuario,
          email: email,
          password: newPassword,
        })
      })
        .then(resposta => {
          return resposta.json();
        })
        .then(resposta => {
          if (resposta === "Usuário atualizado com sucesso!") { //se retornar sucesso
            alert(resposta)
            setNewPassword("");
            setPassword("");
            setUpdateToggle(false);
            dispatch(refreshUsuario({payload: email}))
          }
          else{
            setErro(resposta);
          }
        });
      }
    }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="w-4/12 h-fit p-10 bg-white border rounded-2xl">
        <h1 className="text-3xl">Bem vindo, {usuario}!</h1>
      </div>
      <div className="w-4/12 h-fit p-10 bg-white border rounded-2xl" >
        <h1 className="text-2xl mb-2">Editar dados:</h1>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Usuário</label>
          <input type="text" readOnly id="usuario" className="block w-full p-2.5 bg-slate-50 border border-slate-400 text-sm rounded-lg focus:ring-1 focus:outline-none" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">E-mail</label>
          <input type="email" id="email" className="block w-full p-2.5 bg-slate-50 border border-slate-400 text-sm rounded-lg focus:ring-1 focus:outline-none" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Nova Senha</label>
          <input type="password" id="senha" className="block w-full p-2.5 bg-slate-50 border border-slate-400 text-sm rounded-lg focus:ring-1 focus:outline-none" placeholder="Senha" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div>

        <button className="mr-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={e => setUpdateToggle(!updateToggle)}>Confirmar alterações</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={e => setDeleteToggle(!deleteToggle)}>Excluir conta</button>
      </div>
      {
        deleteToggle ? (
          <div className="w-4/12 h-fit p-10 bg-white border rounded-2xl">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Confirme sua Senha:</label>
              <input type="password" id="senha" className="mb-6 block w-full p-2.5 bg-slate-50 border border-slate-400 text-sm rounded-lg focus:ring-1 focus:outline-none" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button className="mb-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={e => deleteDelete(e)}>Excluir</button>
              <p className="text-red-700">{erro}</p>
            </div>
          </div>
        )
          : ""
      }
      {
        updateToggle ? (
          <div className="w-4/12 h-fit p-10 bg-white border rounded-2xl">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Confirme sua Senha:</label>
              <input type="password" id="senha" className="mb-6 block w-full p-2.5 bg-slate-50 border border-slate-400 text-sm rounded-lg focus:ring-1 focus:outline-none" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={e => updatePut(e)}>Salvar</button>
              <p className="text-red-700">{erro}</p>
            </div>
          </div>
        )
          : ""
      }
    </div>
  )
}

export default Usuario;
