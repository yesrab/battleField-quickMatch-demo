import React from "react";
import squad from "../assets/squad.svg";
import join from "../assets/join.svg";
const Sidebar = () => {
  const styles = {
    transition: "all 0.5s ease",
  };
  return (
    <aside
      style={styles}
      className='group px-2 py-5 absolute right-0 top-0 bottom-0 hover:left-[85%] hover:bg-black hover:bg-opacity-45'>
      <hr className='bg-slate-700 invisible group-hover:visible' />
      <span className='p-2 my-2 text-sm font-semibold flex gap-2'>
        <img src={squad} alt='squad' />
        <p className='hidden group-hover:block'>SQUAD</p>
      </span>
      <span className='p-2 my-2 text-sm font-semibold flex gap-2 items-center'>
        <img width={30} src={join} alt='squad' />
        <p className='flex-grow cursor-pointer hidden hover:bg-white hover:text-black group-hover:block'>
          Squad Join
        </p>
      </span>
    </aside>
  );
};

export default Sidebar;
