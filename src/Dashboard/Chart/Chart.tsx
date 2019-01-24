import * as React from 'react';
import { Scatter } from 'react-chartjs-2';
import { getApproximationOfMoodData } from './utils';
import options from './options';
import ReportService from '../../services/ReportService/ReportService';

const reportService = new ReportService();

const getChartData = (data: any) => ({
  datasets: [
    {
      data,
      label: 'Mood',
      radius: 4
    },
    {
      label: 'Line',
      type: 'line',
      tension: 0.2,
      fill: false,
      showLine: true,
      data: getApproximationOfMoodData()
    }
  ]
});

export default class Chart extends React.Component {
  public state = {
    moodData: [],
    lineData: [],
  };

  public componentDidMount() {
    reportService.report({ filterFn: () => true }).subscribe((postData: any) => {
      const moodData = [
        ...this.state.moodData,
        {
          x: new Date(postData.post.publicationTime),
          y: postData.post.mood
        }
      ];
      const lineData = getApproximationOfMoodData(moodData);
      this.setState({
        moodData,
        lineData
      });
    })
  }

  public render() {
    return (<Scatter data={getChartData(this.state.moodData)} options={options}/>);
  }
}
