import React from 'react';

function SmallCircle({ value, smallText, circleClass }) {
  return (
    <div className="circle-small">
      <div className="text">
        {value}
        <div className="small">{smallText}</div>
      </div>
      <svg>
        <circle className="bg" cx="40" cy="40" r="37" />
        <circle className={`progress ${circleClass}`} cx="40" cy="40" r="37" />
      </svg>
    </div>
  );
}

export default SmallCircle;
