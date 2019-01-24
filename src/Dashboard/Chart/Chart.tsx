import * as React from 'react';
import { Scatter } from 'react-chartjs-2';
import { getLineData, getChartData } from './utils';
import options from './options';
import { ReportResponse } from '../../services/api/ReportService';
import ReportService from '../../services/ReportService/ReportService';

const reportService = new ReportService();

export default class Chart extends React.Component {
  public state = {
    moodData: [],
    lineData: [],
  };

  public componentDidMount() {
    reportService.report({ filterFn: () => true }).subscribe((postData: ReportResponse) => {
      const moodData = [
        ...this.state.moodData,
        {
          x: new Date(postData.post.publicationTime),
          y: postData.post.mood
        }
      ];
      const lineData = getLineData(moodData);
      this.setState({
        moodData,
        lineData
      });
    })
  }

  public render() {
    return (<Scatter data={getChartData(this.state.moodData, this.state.lineData)} options={options} />);
  }
}
