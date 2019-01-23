import { Observable } from 'rxjs';
import { Post } from './Post';

export interface ReportService {
  report: (reportRequest: ReportRequest) => Observable<ReportResponse>
}

interface ReportRequest {
  filterFn: (post: Post) => boolean;
}

interface ReportResponse {
  posts: Post[];
}
