import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import store, { entrar } from "../../store"

function Cadastro() {
  const navigate = useNavigate(); //Hook usado para redirecionamento
  const logadoEstado = store.getState().logado;
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log(logadoEstado)
    if (logadoEstado) {
      navigate('/');
    }
  }, [logadoEstado, navigate])

  function postCadastro() {
    fetch('http://localhost:6969/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
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
        if (resposta == "Usuário cadastrado com sucesso!") { //se retornar sucesso
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
    /*dispatch(entrar({
      name: name,
      password: password
    }))*/
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <form className="" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-6">
          <input type="name" className="" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="mb-6">
          <input type="email" className="" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-6">
          <input type="password" className="" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
