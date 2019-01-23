import { UserId } from './User';

export interface PublishService {
  publish: (publishRequest: PublishRequest) => Promise<PublishResponse>
}

interface PublishRequest  {
  authorId: UserId;
  mood: 0 | 1 | 2 | 3 | 4;
  message?: string;
  tags?: string[];
  relatedUsers: UserId[];
}

interface PublishResponse {}

