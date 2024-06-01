import React from "react";
import qcm from "../assets/quick.png";
import { useNavigate } from "react-router-dom";
const MPchips = ({ urlLocation }) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => {
        nav(urlLocation);
      }}
      className='group bg-dim flex flex-col items-center w-[15%] cursor-pointer'>
      <img src={qcm} className='group-hover:-translate-y-1 duration-300 ' />
      <div className='p-3 duration-300 group-hover:bg-white group-hover:text-black'>
        <h3 className='font-bold'>QUICKMATCH</h3>
        <p className='text-sm'>
          The quickest way to get into any of the game modes.
        </p>
      </div>
    </div>
  );
};

export default MPchips;
