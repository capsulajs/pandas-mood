import PublishServiceDefinition, { PublishRequest, PublishResponse } from '../api/PublishServiceDefinition'; // tslint:disable-line
import {postsRef} from '../utils/firebase';

export default class PublishService implements PublishServiceDefinition {
  public publish(publishRequest: PublishRequest): Promise<PublishResponse> {

    const requestEnrichment = {
      ...publishRequest,
      publicationTime: Date.now()
    };

    const newDataref = postsRef.push();

    return newDataref.set(requestEnrichment)
      .then(() => Promise.resolve({ msg: 'Record had been added' }))
      .catch((msg) => Promise.reject({ msg }));
  }
}
