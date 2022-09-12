import React, { useContext } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import './layout.scss'
import { sideBar } from "../contexts/SidebarContext";

const Layout = ({ children, title }) => {
  const { isOpen } = useContext(sideBar)
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout_body">
        <Header title={title} />
        <div className="layout_content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
