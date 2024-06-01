import React from "react";
import { Link } from "react-router-dom";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import watch from "../assets/watch.svg";
import news from "../assets/news.svg";
import help from "../assets/help.svg";
import power from "../assets/power.svg";
import { NavLink } from "react-router-dom";

const imageArray = [one, two, three, four, five, watch, news];
const GameSwitcher = () => {
  return (
    <nav className='max-w-[5%] flex flex-col justify-center border-r border-gray-600 max-h-screen'>
      <ul className='flex flex-col gap-5 mt-auto'>
        <li>
          <NavLink to='/bf5' className='flex' title='BATTLEFIELD V'>
            {({ isActive }) => {
              return (
                <>
                  {isActive ? <div className='bg-yellow-600 w-1' /> : null}
                  <img
                    className={`px-2 w-12 ${!isActive ? "opacity-50" : "opacity-100"}`}
                    src={one}
                  />
                </>
              );
            }}
          </NavLink>
        </li>
        <li>
          <NavLink to='/bf1' className='flex' title='BATTLEFIELD I'>
            {({ isActive }) => {
              return (
                <>
                  {isActive ? <div className='bg-yellow-600 w-1' /> : null}
                  <img
                    className={`px-2 w-12 ${!isActive ? "opacity-50" : "opacity-100"}`}
                    src={two}
                  />
                </>
              );
            }}
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className='flex' title='BATTLEFIELD 4'>
            {({ isActive }) => {
              return (
                <>
                  {isActive ? <div className='bg-yellow-600 w-1' /> : null}
                  <img
                    className={`px-2 w-12 ${!isActive ? "opacity-50" : "opacity-100"}`}
                    src={three}
                  />
                </>
              );
            }}
          </NavLink>
        </li>
        <li>
          <NavLink to='/bh' className='flex' title='BATTLEFIELD HARDLINE'>
            {({ isActive }) => {
              return (
                <>
                  {isActive ? <div className='bg-yellow-600 w-1' /> : null}
                  <img
                    className={`px-2 w-12 ${!isActive ? "opacity-50" : "opacity-100"}`}
                    src={four}
                  />
                </>
              );
            }}
          </NavLink>
        </li>
        <li>
          <NavLink to='/career' className='flex' title='CAREER'>
            {({ isActive }) => {
              return (
                <>
                  {isActive ? <div className='bg-yellow-600 w-1' /> : null}
                  <img
                    className={`px-2 w-12 ${!isActive ? "opacity-50" : "opacity-100"}`}
                    src={five}
                  />
                </>
              );
            }}
          </NavLink>
        </li>
        <li>
          <NavLink to='/watch' className='flex' title='WATCH'>
            {({ isActive }) => {
              return (
                <>
                  {isActive ? <div className='bg-yellow-600 w-1' /> : null}
                  <img
                    className={`px-2 w-12 ${!isActive ? "opacity-70" : "opacity-100"}`}
                    src={watch}
                  />
                </>
              );
            }}
          </NavLink>
        </li>
        <li>
          <NavLink to='/news' className='flex' title='NEWS'>
            {({ isActive }) => {
              return (
                <>
                  {isActive ? <div className='bg-yellow-600 w-1' /> : null}
                  <img
                    className={`px-2 w-12 ${!isActive ? "opacity-70" : "opacity-100"}`}
                    src={news}
                  />
                </>
              );
            }}
          </NavLink>
        </li>
      </ul>
      <ul className='flex flex-col items-center mt-auto mb-3 gap-5'>
        <li>
          <NavLink to='/help' className='flex' title='HELP'>
            {({ isActive }) => {
              return (
                <>
                  {isActive ? <div className='bg-yellow-600 w-1' /> : null}
                  <img
                    className={`px-2 w-8 ${!isActive ? "opacity-70" : "opacity-100"}`}
                    src={help}
                  />
                </>
              );
            }}
          </NavLink>
        </li>
        <li>
          <NavLink to='/news' className='flex' title='QUIT'>
            {({ isActive }) => {
              return (
                <>
                  {isActive ? <div className='bg-yellow-600 w-1' /> : null}
                  <img
                    className={`px-2 w-8 ${!isActive ? "opacity-70" : "opacity-100"}`}
                    src={power}
                  />
                </>
              );
            }}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default GameSwitcher;
