import React from "react";
import back from "../../assets/back.svg";
import { useNavigate, useLoaderData, defer } from "react-router-dom";
import QMlist from "../../components/QMlist";

import QMdetails from "../../components/QMdetails";
import { useState } from "react";
import { Await } from "react-router-dom";
import { Suspense } from "react";

export const loader = async () => {
  console.log("qm page loader fired");
  const APIURL = "/api/v1/match/quickMatch";
  const response = await fetch(APIURL);
  const data = response.json();
  // console.log(data);
  return defer({ data });
};

const QMpage = () => {
  const nav = useNavigate();
  const { data } = useLoaderData();
  const [currentElement, setCurrentElement] = useState(null);
  return (
    <div className='p-3 flex flex-col flex-grow'>
      <span
        onClick={() => {
          nav("/multiplayer");
        }}
        className='flex gap-2 cursor-pointer'>
        <img src={back} />
        <h3 className='font-bold'>MULTIPLAYER /</h3>
      </span>
      <h1 className='text-3xl font-medium my-2'>QUICKMATCH</h1>
      <div className='flex gap-5'>
        <Suspense fallback={<h1>Loading QuickMatch LIST</h1>}>
          <Await resolve={data}>
            {(data) => {
              return (
                <QMlist
                  list={data}
                  currentElement={currentElement}
                  setCurrentElement={setCurrentElement}
                />
              );
            }}
          </Await>
        </Suspense>
        <Suspense>
          <Await resolve={data}>
            {(data) => {
              return <QMdetails list={data} currentElement={currentElement} />;
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default QMpage;
