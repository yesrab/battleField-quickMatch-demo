import React from "react";

const QMlist = ({ list, setCurrentElement }) => {
  // console.log(list);
  const visibleCurrentElement = (item) => {
    setCurrentElement(item.ID);
  };
  const resetCurrentElement = () => {
    setCurrentElement(null);
  };
  return (
    <div className='p-2 h-[85vh] overflow-y-auto border-collapse flex flex-col scrollbar '>
      {list?.QM?.map((item) => {
        return (
          <div
            onMouseEnter={() => {
              visibleCurrentElement(item);
            }}
            onMouseLeave={resetCurrentElement}
            key={item.ID}
            className={`group py-3 cursor-pointer duration-300 hover:bg-white flex flex-col justify-center gap-2`}>
            <hr className='bg-slate-700 group-hover:invisible' />
            <p
              className={`${item?.ATTENTION ? "text-orange-500" : ""} text-sm font-semibold group-hover:text-gray-800`}>
              {item.TITLE}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default QMlist;
