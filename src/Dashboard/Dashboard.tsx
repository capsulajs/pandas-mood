import * as React from 'react';
import './Dashboard.css';
import HashTags from './HashTags/HashTags';

class Dashboard extends React.Component {
  public render() {
    return (
      <div className="Dashboard">
        chart should be here
        <HashTags />
      </div>
    );
  }
}

export default Dashboard;
