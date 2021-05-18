import React from 'react';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts';
import { Circle } from 'react-native-svg';
import { View } from 'react-native';

import * as shape from 'd3-shape';

const Chart: React.FC<{ data?: number[] }> = ({ data }) => {
  const Decorator = ({ x, y, data }: { x: any; y: any; data?: number[] }) => {
    return data?.map((value, index) => (
      <Circle
        key={index}
        cx={x(index)}
        cy={y(value)}
        r={2}
        stroke={'#FAFF0E'}
        strokeWidth={2}
        fill={'white'}
      />
    ));
  };

  return (
    <View style={{ height: 180, flexDirection: 'row' }}>
      <YAxis
        data={data}
        style={{ flexDirection: 'row' }}
        contentInset={{ top: 14, bottom: 14 }}
        svg={{
          fill: 'white',
          fontSize: 13,
        }}
        numberOfTicks={10}
        max={100}
        min={0}
      />

      <LineChart
        style={{ flex: 1, marginLeft: 5, marginRight: 5 }}
        data={data}
        svg={{ stroke: '#FAFF0E', strokeWidth: '2' }}
        contentInset={{ top: 14, bottom: 14, left: 5, right: 5 }}
        curve={shape.curveNatural}
        yMax={100}
        yMin={0}
      >
        <Grid />
        <Decorator x={2} y={2} data={data} />
      </LineChart>
    </View>
  );
};

export default Chart;
