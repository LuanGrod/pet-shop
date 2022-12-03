import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
    <div className="flex h-screen justify-center items-center">
      <form className="" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-6">
          <input type="name" className="" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="mb-6">
          <input type="password" className="" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Acessar</button>
        <p>Não tem conta? <a href="./cadastro" className="text-blue-600">Cadastre-se</a> </p>
        <p className="text-red-700">{erro}</p>
      </form>
      <div>
    
      </div>
    </div>
  )
}

export default Login;
