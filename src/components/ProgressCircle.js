import React from "react";

function ProgressCircle({ value, smallText }) {
  return (
    <div className="circle-big">
      <div className="text">
        {value}
        <div className="small">{smallText}</div>
      </div>
      <svg>
        <circle className="bg" cx="57" cy="57" r="52" />
        <circle className="progress" cx="57" cy="57" r="52" />
      </svg>
    </div>
  );
}

export default ProgressCircle;
