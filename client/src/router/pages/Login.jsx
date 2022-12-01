import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice"

export function Login(){
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({
      name: name,
      password: password,
      loggedIn: true
    }))
  }

  return (
    <div className="">
      <form className="" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-6">
            <input type="name" className="" placeholder="Name" value={name} onChange={(e) => setName(e.target.value) }/>
        </div>

        <div className="mb-6">
              <input type="password" className="" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value) }/>
        </div>

        <button type="submit">Acessar</button>
      </form>
    </div>
  )
}

export default Login;
