import React from "react";
import { HiFunnel } from "react-icons/hi2";
import ObjectRow from './ObjectRow';

function SidebarFilter(props) {
  const rows = [];
  for (let i = 0; i < props.children; i++) {
    rows.push(<ObjectRow key={i} />);
  }

  return (
    <div className="w-auto">
      <div className="flex justify-between mx-2 my-auto">
        <p className="uppercase text-brand-secundary font-bold">{props.title}</p><HiFunnel className="text-2xl" />
      </div>
      <hr className="w-auto h-1 bg-brand-secundary" />
      <tbody>{rows}</tbody>
    </div>
  );
}

export default SidebarFilter;
