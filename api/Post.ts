import { Tag } from './Tag';

export interface Post {
  authorId: string;
  authorName: string;
  time: number;
  mood: number;
  message?: string;
  tags?: Tag[];
  popularity: number;
}
