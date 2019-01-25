import * as React from 'react';
import { Scatter } from 'react-chartjs-2';
import { getLineData, getChartData } from './utils';
import getOptions from './options';
import { ReportResponse } from '../../services/api/ReportService';
import ReportService from '../../services/ReportService/ReportService';

const reportService = new ReportService();

export default class Chart extends React.Component {
  public state = {
    scatterData: [],
    lineData: [],
    posts: []
  };

  public componentDidMount() {
    reportService.report({ filterFn: () => true }).subscribe((data: ReportResponse) => {
      const { post } = data;
      const scatterData = [
        ...this.state.scatterData,
        {
          x: new Date(post.publicationTime),
          y: post.mood
        }
      ];
      const lineData = getLineData(scatterData);
      this.setState({
        scatterData,
        lineData,
        posts: [...this.state.posts, post],
      });
    })
  }

  public render() {
    return (
      <Scatter
        data={getChartData(this.state.scatterData, this.state.lineData)}
        options={getOptions(this.state.posts)}
      />
    );
  }
}
