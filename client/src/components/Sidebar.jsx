import React from "react";
import SidebarFilter from './SidebarFilter';

function Sidebar() {
  return (
    <aside className="w-52 h-7 bg-brand-primary">
      <SidebarFilter title="categoria" children="5" />
    </aside>
  );
}

export default Sidebar;
