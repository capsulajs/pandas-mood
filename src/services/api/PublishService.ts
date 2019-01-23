import { UserId } from './User';

export  default interface PublishService {
  publish: (publishRequest: PublishRequest) => Promise<PublishResponse>
}

export interface PublishRequest  {
  authorId: UserId;
  mood: 0 | 1 | 2 | 3 | 4;
  message?: string;
  tags?: string[];
  relatedUsers: UserId[];
}

export interface PublishResponse {}

