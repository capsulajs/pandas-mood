import { UserId } from './User';

export interface Post {
  postId: number;
  authorId: UserId;
  authorName: string;
  publicationTime: number;
  mood: number;
  message?: string;
  tags?: string[];
  popularity: number;
  relatedUsers: UserId[];
}
