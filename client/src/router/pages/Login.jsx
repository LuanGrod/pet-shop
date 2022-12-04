import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import store, { entrar } from "../../store"

function Login() {

  const navigate = useNavigate(); //Hook usado para redirecionamento
  const logadoEstado = store.getState().logado;
  const dispatch = useDispatch();

  useEffect(() => {
    if (logadoEstado === true) {
      alert("Você já está logado")
      navigate('/');
    }
  }, [logadoEstado, navigate])



  function login() {
    fetch('http://localhost:6969/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: new URLSearchParams({
        username: name,
        password: password,
      })
    })
      .then(resposta => {
        return resposta.json();
      })
      .then(resposta => {
        if (typeof resposta.username != "undefined") { //se retornar um usuario
          dispatch(entrar(resposta)) //Faz a mudança do estado global
          navigate("/")//redireciona para home
        } else { //se retornar um erro
          setErro(resposta);
        }
      });
  }

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [erro, setErro] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && password) {
      setErro('');
      login();
    } else {
      setErro('Campo(s) vazio(s)');
    }
  }

  return (
    <div className="flex h-screen justify-center items-center bg-blob-1 bg-cover">
      <form className="w-4/12 h-fit p-10 bg-white border rounded-2xl opacity-95" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-5">
          <label for="usuario" className="block mb-2 text-sm font-medium text-gray-900">Usuário</label>
          <input type="text" id="usuario" className="block w-full p-2.5 bg-slate-50 border border-slate-400 text-sm rounded-lg focus:ring-1 focus:outline-none" placeholder="Usuário" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-6">
          <label for="senha" className="block mb-2 text-sm font-medium text-gray-900">Senha</label>
          <input type="password" id="senha" className="block w-full p-2.5 bg-slate-50 border border-slate-400 text-sm rounded-lg focus:ring-1 focus:outline-none" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="flex flex-col">
          <button className="w-full p-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center" type="submit">Acessar</button>
          <span className="mt-2.5">Não tem conta? <Link to="/cadastro" className="text-blue-600 hover:font-medium">Cadastre-se</Link></span>
          <p className="text-red-700">{erro}</p>
        </div>
      </form >
    </div >
  )
}

export default Login;
