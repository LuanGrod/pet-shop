import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../store"

function Cadastro() {
  const navigate = useNavigate(); //Hook usado para redirecionamento
  const logadoEstado = store.getState().logado;

  useEffect(() => {
    if (logadoEstado) {
      navigate('/');
    }
  }, [logadoEstado, navigate])

  function postCadastro() {
    fetch('https://pet-shop-aglr-api.vercel.app/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: new URLSearchParams({
        username: name,
        email: email,
        password: password,
      })
    })
      .then(resposta => {
        return resposta.json();
      })
      .then(resposta => {
        alert(resposta);
        if (resposta === "Usuário cadastrado com sucesso!") { //se retornar sucesso
          navigate("/login")//redireciona para login
        }
      });
  }

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    postCadastro();
  }

  return (
    <div className="flex h-screen justify-center items-center bg-blob-2 bg-cover">
      <form className="w-4/12 h-fit p-10 bg-white border rounded-2xl" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Usuário</label>
          <input type="text" id="usuario" className="block w-full p-2.5 bg-slate-50 border border-slate-400 text-sm rounded-lg focus:ring-1 focus:outline-none" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">E-mail</label>
          <input type="email" id="email" className="block w-full p-2.5 bg-slate-50 border border-slate-400 text-sm rounded-lg focus:ring-1 focus:outline-none" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Usuário</label>
          <input type="password" id="senha" className="block w-full p-2.5 bg-slate-50 border border-slate-400 text-sm rounded-lg focus:ring-1 focus:outline-none" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
