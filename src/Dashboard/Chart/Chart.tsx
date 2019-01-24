import * as React from 'react';
import { Scatter } from 'react-chartjs-2';
import { getMoodData, getApproximationOfMoodData } from './utils';
import options from './options';

const data = {
  datasets: [{
    label: 'Mood',
    data: getMoodData(),
    radius: 4
  }, {
    type: 'line',
    tension: 0.2,
    fill: false,
    showLine: true,
    data: getApproximationOfMoodData()
  }]
}

export default class Chart extends React.Component {
  public render() {
    return (<Scatter data={data} options={options}/>);
  }
}
