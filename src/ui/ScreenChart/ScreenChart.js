import React from 'react';
import Screen from 'ui/Screen/Screen';

const ScreenChart = props => (
  <div
    className="chart"
    style={{ background: '#fff', width: '100%', height: '100%', position: 'absolute', zIndex: 1 }}
  >
    <h1>Header</h1>
    <button onClick={props.onClick}>Back to form</button>
  </div>
);
export default ScreenChart;
