import { Post } from './Post';

export interface ReportService {
  report: (reportRequest: ReportRequest) => Promise<ReportResponse>
}

interface ReportRequest {
  filterFn: (post: Post) => boolean;
}

interface ReportResponse {
  posts: Post[];
}
