import { Observable } from 'rxjs';
import { Post } from './Post';

export interface ReportService {
  report: (reportRequest: ReportRequest) => Observable<ReportResponse>
}

export interface ReportRequest {
  filterFn: (post: Post) => boolean;
}

export interface ReportResponse {
  posts: Post[];
}
