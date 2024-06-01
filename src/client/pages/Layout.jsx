import React from "react";
import { Outlet } from "react-router-dom";
import GameSwitcher from "../components/GameSwitcher";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className='bg-menu min-h-dvh bg-cover bg-dim bg-blend-multiply text-white font-Rajdhani flex'>
      <GameSwitcher />
      <Outlet />
      <Sidebar />
    </div>
  );
};

export default Layout;
