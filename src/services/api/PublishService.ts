import { UserId } from './User';
import { Mood } from './Mood';


export interface PublishService {
  publish: (publishRequest: PublishRequest) => Promise<PublishResponse>
}

interface PublishRequest  {
  authorId: UserId;
  mood: Mood
  message?: string;
  tags?: string[];
  relatedUsers: UserId[];
}

interface PublishResponse {}
