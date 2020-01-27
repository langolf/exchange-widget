import React from 'react';
import Chart from 'ui/Chart/Chart';

const ScreenChart = ({ onClick }) => (
  <div
    className="chart"
    style={{
      transform: 'translate3d(100%,0,0)',
      background: '#fff',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      position: 'absolute',
      zIndex: 1,
    }}
  >
    <h1>Header</h1>
    <button onClick={onClick}>Back to form</button>
    <Chart />
  </div>
);
export default ScreenChart;
