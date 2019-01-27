import PublishServiceDefinition, { PublishRequest, PublishResponse } from '../api/PublishServiceDefinition'; // tslint:disable-line
import { getFirebaseItem } from '../utils/firebase';

export default class PublishService implements PublishServiceDefinition {
  private postsRef: any;

  constructor() {
    this.postsRef = getFirebaseItem('postsRef');
  }

  public publish(publishRequest: PublishRequest): Promise<PublishResponse> {

    const requestEnrichment = {
      ...publishRequest,
      publicationTime: Date.now()
    };

    const newDataref = this.postsRef.push();

    return newDataref.set(requestEnrichment)
      .then(() => Promise.resolve({ msg: 'Record had been added' }))
      .catch((msg: any) => Promise.reject({ msg }));
  }
}
