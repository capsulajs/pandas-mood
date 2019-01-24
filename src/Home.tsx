import * as React from 'react';
import ReportService from './services/ReportService/ReportService';
import { Post } from './services/api/Post'

class Home extends React.Component {
  // public componentDidMount() {
  //   const reportService = new ReportService();
  //   reportService.report({ filterFn: (post: Post) => post.message !== 'Test message' })
  //     .subscribe((data: any) => {
  //       console.log('data from report 1', data);
  //     });
  //
  //   setTimeout(() => {
  //     reportService.report({ filterFn: (post: Post) => post.message === 'Test message' })
  //       .subscribe((data: any) => {
  //         console.log('data from report 2', data);
  //       });
  //   }, 5000);
  // }

  public render() {
    return (
        <div className="Home">home</div>
    );
  }
}
export default Home;
