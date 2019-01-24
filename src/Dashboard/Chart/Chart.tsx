import * as React from 'react';
import * as moment from 'moment';
import { Scatter } from 'react-chartjs-2';

const mood = () => Math.round(Math.random() * 4);
const dates = [
  '01/01/2019',
  '02/01/2019',
  '03/01/2019',
  '04/01/2019',
  '05/01/2019',
  '06/01/2019',
  '07/01/2019'
].map(i => new Date(i));

const data = {
  datasets: [{
    label: 'Mood',
    data: Array.from(Array(50).keys()).map(() => ({ x: Math.round(Math.random() * dates.length), y: mood() })),
    borderColor: '#2196f3',
    backgroundColor: '#2196f3',
  }]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  layout: {
    padding: {
      top: 25,
      bottom: 25,
      left: 25,
      right: 25
    }
  },
  tooltips: {
    enabled: false
  },
  animation: {
    duration: 1000
  },
  scales: {
    xAxes: [{
      ticks: {
        callback: (value: any) => moment(value).format('DD MMM')
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      gridLines: {
        display: false
      }
    }]
  }
};

export default class Chart extends React.Component {
  public render() {
    return (<Scatter data={data} options={options}/>)
  }
}
