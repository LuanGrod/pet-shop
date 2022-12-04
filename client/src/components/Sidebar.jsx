import React from "react";
import SidebarFilter from './SidebarFilter';

function Sidebar() {
  return (
    <aside className="w-52 h-7">
      <SidebarFilter title="cachorro" children="9" />
      <SidebarFilter title="gato" children="4" />
      <SidebarFilter title="peite" children="7" />
      <SidebarFilter title="outros" children="5" />
    </aside>
  );
}

export default Sidebar;
