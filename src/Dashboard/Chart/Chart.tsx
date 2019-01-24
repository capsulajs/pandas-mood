import * as React from 'react';
import { Scatter } from 'react-chartjs-2';
import options from './options';

const day = () => dates[Math.round(Math.random() * dates.length)];
const mood = () => Math.round(Math.random() * 4);
const mean = (array: number[]) => array.reduce((a, b) => a + b, 0) / array.length;

const labels = [
  '01/01/2019',
  '01/02/2019',
  '01/03/2019',
  '01/04/2019',
  '01/05/2019',
  '01/06/2019',
  '01/07/2019'
];

const dates = labels.map(i => new Date(i));
const moodData = Array.from(Array(50).keys()).map(() => ({ x: day(), y: mood() }));

const data = {
  labels,
  datasets: [{
    label: 'Mood',
    data: moodData,
    radius: 4
  }, {
    type: 'line',
    tension: 0.2,
    fill: false,
    showLine: true,
    data: dates.map((date) => ({ x: new Date(date).getTime(), y: mean(moodData.filter(i => i.x === date).map(i => i.y)) }))
  }]
}

export default class Chart extends React.Component {
  public render() {
    return (<Scatter data={data} options={options}/>);
  }
}
