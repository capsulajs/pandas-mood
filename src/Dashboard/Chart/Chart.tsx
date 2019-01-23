import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  datasets: [{
    label: 'Population',
    data: [
      { x: 5, y: 4 },
      { x: 2, y: 14 },
      { x: 4, y: 12 },
      { x: 2, y: 10 },
      { x: 3, y: 4 },
      { x: 3, y: 5 },
      { x: 3, y: 8 },
      { x: 6, y: 12
    }],
    borderColor: '#2196f3',
    backgroundColor: '#2196f3',
  }]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

export default class Chart extends React.Component {
  public render() {
    return (<Line type="scatter" data={data} options={options}/>)
  }
}
