import React from "react";
import { HiFunnel } from "react-icons/hi2";

function SidebarFilter(props) {
  const rows = [];
  for (let i = 0; i < props.children; i++) {
    rows.push(<ObjectRow key={i}></ObjectRow>)

  }
  return (
    <div className="w-auto">
      <div className="flex justify-between mx-2">
        <p className="uppercase">{props.title}</p><HiFunnel className="text-2xl" />
      </div>
      <hr className="w-auto h-1 bg-slate-600" />
      {

      }
    </div>
  );
}

export default SidebarFilter;
