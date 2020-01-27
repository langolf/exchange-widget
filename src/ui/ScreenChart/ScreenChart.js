import React from 'react';
import Screen from 'ui/Screen/Screen';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';

const data = [];

for (let i = 0; i < 20; i++) {
  const series = [];
  for (let j = 0; j < 100; j++) {
    series.push({ x: j, y: (i / 10 + 1) * Math.sin((Math.PI * (i + j)) / 50) });
  }
  data.push({ color: i, key: i, data: series, opacity: 0.8 });
}

const ScreenChart = props => (
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
    <button onClick={props.onClick}>Back to form</button>

    <XYPlot width={300} height={300} colorType="linear" colorDomain={[0, 9]} colorRange={['yellow', 'orange']}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      {data.map(props => (
        <LineSeries {...props} />
      ))}
    </XYPlot>
  </div>
);
export default ScreenChart;
