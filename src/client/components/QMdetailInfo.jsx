import React from "react";

const QMdetailInfo = ({ data, currentElement }) => {
  return (
    <div
      className={`${currentElement == data.ID ? "block" : "hidden"} duration-300 ease-in-out`}>
      <img referrerpolicy='no-referrer' width={480} src={data.URL} />
      <h1 className='text-lg font-semibold'>{data.TITLE}</h1>
      <h4>{data.DESCRIPTION}</h4>
      <span>
        {data?.DETAILS?.map((item, key) => {
          return <p key={key}>{item}</p>;
        })}
      </span>
    </div>
  );
};

export default QMdetailInfo;
