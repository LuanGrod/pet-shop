import React from "react";
import { useParams } from 'react-router-dom'

function Produto() {
  let params = useParams();
  const { id } = params;

  return <div>Produto {id}</div>;
}

export default Produto;
