import React from "react";
import SidebarFilter from './SidebarFilter';

function Sidebar() {
  return (
    <aside className="w-52 h-7">
      <SidebarFilter title="categoria" children="9" />
      <SidebarFilter title="preço" children="5" />
      <SidebarFilter title="pet" children="3" />
      <SidebarFilter title="porte" children="5" />
      <SidebarFilter title="marca" children="10" />
    </aside>
  );
}

export default Sidebar;
