import * as React from 'react';
import { Scatter } from 'react-chartjs-2';
import options from './options';
import ReportService from '../../services/ReportService/ReportService';

const reportService = new ReportService();

const getChartData = (data: any) => ({
  datasets: [{
    data,
    label: 'Mood',
    radius: 4
  }]
});

export default class Chart extends React.Component {
  public state = {
    data: []
  };

  public componentDidMount() {
    reportService.report({ filterFn: () => true }).subscribe((postData: any) => {
      const newPostData = {
        x: new Date(postData.post.publicationTime),
        y: postData.post.mood
      };
      this.setState({
        data: [...this.state.data, newPostData]
      });
    })
  }

  public render() {
    return (<Scatter data={getChartData(this.state.data)} options={options}/>);
  }
}
