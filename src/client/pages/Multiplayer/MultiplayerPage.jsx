import React from "react";
import MPchips from "../../components/MPchips";

const MultiplayerPage = () => {
  return (
    <div className='pt-10 px-2'>
      <span className='mt-10'>
        <MPchips urlLocation='/quickmatch' />
      </span>
    </div>
  );
};

export default MultiplayerPage;
