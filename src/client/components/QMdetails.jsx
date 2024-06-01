import React from "react";
import QMdetailInfo from "./QMdetailInfo";

const QMdetails = ({ list, currentElement }) => {
  return (
    <div className='h-[80vh] overflow-hidden'>
      {list?.QM?.map((item) => {
        return (
          <QMdetailInfo
            currentElement={currentElement}
            data={item}
            key={item.ID}
          />
        );
      })}
    </div>
  );
};

export default QMdetails;
