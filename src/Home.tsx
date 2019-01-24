import * as React from 'react';
import ReportService from './services/ReportService/ReportService';

class Home extends React.Component {
  public componentDidMount() {
    const reportService = new ReportService();
    reportService.report({ filterFn: (post: any) => true }).subscribe((data: any) => {
      console.log('data from report', data);
    })
  }

  public render() {
    return (
        <div className="Home">home</div>
    );
  }
}
export default Home;
