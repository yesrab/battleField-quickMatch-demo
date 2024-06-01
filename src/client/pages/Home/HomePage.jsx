import React from "react";
import logo from "../../assets/bf4Logo.svg";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const HomePage = () => {
  return (
    <main className='flex-grow p-3'>
      <header className='flex items-center justify-between mx-10'>
        <div className='border-b flex gap-5 border-gray-600 flex-grow mx-2'>
          <NavLink to='/'>
            {({ isActive }) => {
              return (
                <p className={`${isActive ? "border-b-2" : "border-b-0"}`}>
                  HOME
                </p>
              );
            }}
          </NavLink>
          <NavLink to='multiplayer'>
            {({ isActive }) => {
              return (
                <p className={`${isActive ? "border-b-2" : "border-b-0"}`}>
                  MULTIPLAYER
                </p>
              );
            }}
          </NavLink>
          <NavLink to='/campaign'>
            {({ isActive }) => {
              return (
                <p className={`${isActive ? "border-b-2" : "border-b-0"}`}>
                  CAMPAIGN
                </p>
              );
            }}
          </NavLink>
          <NavLink to='/soldier'>
            {({ isActive }) => {
              return (
                <p className={`${isActive ? "border-b-2" : "border-b-0"}`}>
                  SOLDIER
                </p>
              );
            }}
          </NavLink>
          <NavLink to='/store'>
            {({ isActive }) => {
              return (
                <p className={`${isActive ? "border-b-2" : "border-b-0"}`}>
                  STORE
                </p>
              );
            }}
          </NavLink>
          <NavLink to='/more'>
            {({ isActive }) => {
              return (
                <p className={`${isActive ? "border-b-2" : "border-b-0"}`}>
                  MORE
                </p>
              );
            }}
          </NavLink>
        </div>
        <img width={200} src={logo} />
      </header>

      <Outlet />
    </main>
  );
};

export default HomePage;
