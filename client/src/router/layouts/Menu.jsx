import { Link } from "react-router-dom";
import { TbShoppingCart, TbUserCircle } from "react-icons/tb"
import store from "../../features/userSlice"

import logo from '../../assets/cat-logo.png'
import { useState } from "react";

export function Menu(){
  const login = store.getState().login
  console.log("menu" + login)

  const [loggedUser, setLoggedUser] = useState(login)

  store.subscribe(() => {
    setLoggedUser(store.getState().login)
  })

    return (
      <nav className="w-screen h-20 flex justify-between bg-brand-dark z-50">
        <div className="h-full flex">  {/* left */}
          <img src={logo} alt="logo" className="ml-6"/>
          <Link to="/" className="my-auto text-heading text-white ">[nome:]</Link>
          <div className=" text-white">{loggedUser}</div>
        </div>
        <div className="h-full flex"> {/* right */}
        
            <Link to="/" className="my-auto p-7 text-white hover:bg-brand-tertiary-opacity-50">Home</Link>
            <Link to="/produtos" className="my-auto p-7 text-white hover:bg-brand-tertiary-opacity-50 ">Produtos</Link>
            <Link to="/sobre" className="my-auto p-7 text-white hover:bg-brand-tertiary-opacity-50 ">Sobre</Link>
            <Link to="/carrinho" className="my-auto p-7 text-white hover:bg-brand-tertiary-opacity-50 m-auto"><TbShoppingCart className="m-0 text-2xl"/></Link>
            <Link to="/me" className="my-auto p-7 text-white hover:bg-brand-tertiary-opacity-50 m-auto"><TbUserCircle className="m-0 text-2xl"/></Link>
        </div>

      </nav>
    );
}

export default Menu;
