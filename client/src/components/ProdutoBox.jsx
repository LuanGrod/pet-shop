import React from 'react'
import { useState } from "react";

function ProdutoBox(id) {  

    const [produto, setProduto] = useState({});
 
    function buscaProduto(id) {
        fetch(`http://localhost:6969/produtos?id=${id}`)
        .then(resposta => {
            return resposta.json();
        })
        .then(resposta => {
            setProduto(resposta);
        });
    }

  return (
    <div className="flex flex-col w-50">
      <a></a>
    </div>
  )
}

export default ProdutoBox
