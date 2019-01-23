import { Tag } from './Tag';

export interface PublishService {
  publish: (publishRequest: PublishRequest) => Promise<PublishResponse>
}

interface PublishRequest  {
  authorId: string;
  mood: number;
  message?: string;
  tags?: Tag[];
}

interface PublishResponse {

}

