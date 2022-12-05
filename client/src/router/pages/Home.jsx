import React from "react";
import Slider from "../../components/Slider";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col w-screen h-screen bg-slate-200">
      <Slider />
      <h1 className="m-5 p-5 text-4xl">Bem vindo ao PetShop!</h1>
      <Link className="m-5 p-5 w-fit text-7xl bg-brand-yellow-opacity-75 border-brand-dark hover:bg-brand-yellow ease-in duration-300 border-2 rounded-xl">Conheça nossos produtos!!</Link>
      
    </div>   
  )
}

export default Home;
