import * as React from 'react';
import { Scatter } from 'react-chartjs-2';
import options from './options';

const dates = [
  '01/01/2019',
  '02/01/2019',
  '03/01/2019',
  '04/01/2019',
  '05/01/2019',
  '06/01/2019',
  '07/01/2019'
].map(i => new Date(i));

const day = () => dates[Math.round(Math.random() * dates.length)];
const mood = () => Math.round(Math.random() * 4);
const data = {
  datasets: [{
    label: 'Mood',
    data: Array.from(Array(50).keys()).map(() => ({ x: day(), y: mood() })),
    radius: 4
  }]
}

export default class Chart extends React.Component {
  public render() {
    return (<Scatter data={data} options={options}/>);
  }
}
