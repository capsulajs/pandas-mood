import * as React from 'react';
import './Dashboard.css';
import Chart from './Chart/Chart';
import HashTags from './HashTags/HashTags';

export default class Dashboard extends React.Component {
  public render() {
    return (
      <div className="Dashboard">
        <Chart />
        <HashTags />
      </div>
    );
  }
}
