import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sair } from "../../store";
import store from "../../store";

export function Usuario() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(); //senha atual
  const [newpassword, setNewPassword] = useState(); //senha nova
  const logadoEstado = store.getState().logado;
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [updateToggle, setUpdateToggle] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!logadoEstado) {
      navigate("/login");
    } else {
      setUsuario(store.getState().usuario);
      setEmail(store.getState().email);
    }
  }, [logadoEstado, navigate]);

  const desconectar = (event) => {
    event.preventDefault();
    dispatch(sair());
    navigate("/");
  };

    // Função de deleção da conta

  const handleDelete = (e) => {
    e.preventDefault();
    fetch("http://localhost:6969/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
      },
      body: new URLSearchParams({
        username: usuario,
        password: password,
      }),
    })
      .then((resposta) => {
        return resposta.json();
        
      })
      .then((resposta) => {
        console.log(resposta);
        if (resposta.username === usuario && resposta.email === email) {
          //se retornar sucesso
          fetch("http://localhost:6969/usuario", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Accept": "application/json",
            },
            body: new URLSearchParams({
              username: usuario
            }),
          })
            .then((resposta) => {
              return resposta.JSON.stringify();
              
            })
            .then((resposta) => {
              console.log(resposta);
              if (resposta.username != usuario) {
                setErro("Usuário inexistente!");
              }
            });
        } else {
          setErro("Senha incorreta!");
          return false;
        }
      });
  };

  // Função de atualização dos dados

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch("http://localhost:6969/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
      },
      body: new URLSearchParams({
        username: usuario,
        password: password,
      }),
    })
      .then((resposta) => {
        return resposta.json();
      })
      .then((resposta) => {
        console.log(resposta);
        if (resposta.username === usuario && resposta.email === email) {
          //se retornar sucesso
          fetch("http://localhost:6969/usuario", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Accept": "application/json",
            },
            body: new URLSearchParams({
              username: usuario,
              email: email,
              password: newpassword,
            }),
          })
            .then((resposta) => {
              return resposta.JSON.stringify();
            })
            .then((resposta) => {
              console.log(resposta);
              if (resposta.username != usuario) {
                setErro("Usuário inexistente!");
              }
            });
        } else {
          setErro("Senha incorreta!");
          return false;
        }
      });
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-blob-2 bg-cover">
      <div className="w-4/12 h-fit p-10 bg-white border rounded-2xl">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Usuário
          </label>
          <input
            type="text"
            id="usuario"
            className="block w-full p-2.5 bg-transparent bg-stone-400 border border-slate-400 text-sm rounded-lg focus:ring-1 focus:outline-none"
            readOnly
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Novo e-mail
          </label>
          <input
            type="email"
            id="email"
            className="block w-full p-2.5 bg-slate-50 border border-slate-400 text-sm rounded-lg focus:ring-1 focus:outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Nova Senha
          </label>
          <input
            type="password"
            id="senha"
            className="block w-full p-2.5 bg-slate-50 border border-slate-400 text-sm rounded-lg focus:ring-1 focus:outline-none"
            placeholder="Nova senha"
            value={newpassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <button
          onClick={(e) => setDeleteToggle(!deleteToggle)}
          className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Excluir conta
        </button>

        <button 
        onClick={(e) => setUpdateToggle(!updateToggle)}
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded-full">
          Alterar dados
        </button>
      </div>

      {updateToggle ? (
        <form
          className="w-4/12 h-fit p-10 bg-white border rounded-2xl "
          onSubmit={(e) => handleUpdate(e)}
        >
          <div className="h-fit">
            <label>Confirme sua senha atual</label>
            <input
              className="block w-full p-2.5 bg-slate-50 border border-slate-400 text-sm rounded-lg focus:ring-1 focus:outline-none"
              type="text"
              id="password"
              placeholder="Senha atual..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="mt-2 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full"
              type="submit"
            >
              Confirmar alteração de dados
            </button>
            <p className="text-red-700 p-3">{erro}</p>
          </div>
        </form>
      ) : (
        ""
      )}






      {deleteToggle ? (
        <form
          className="w-4/12 h-fit p-10 bg-white border rounded-2xl "
          onSubmit={(e) => handleDelete(e)}
        >
          <div className="h-fit">
            <label>Confirme sua senha atual</label>
            <input
              className="block w-full p-2.5 bg-slate-50 border border-slate-400 text-sm rounded-lg focus:ring-1 focus:outline-none"
              type="text"
              id="password"
              placeholder="Senha atual..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              type="submit"
            >
              Confirmar exclusão
            </button>
            <p className="text-red-700 p-3">{erro}</p>
          </div>
        </form>
      ) : (
        ""
      )}



    </div>
  );
}

export default Usuario;

{
}
