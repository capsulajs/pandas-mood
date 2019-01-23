import PublishServiceDefinition, { PublishRequest, PublishResponse } from '../api/PublishServiceDefinition'; // tslint:disable-line
import * as firebase from 'firebase';

export class PublishService implements PublishServiceDefinition {
  public publish(publishRequest: PublishRequest): Promise<PublishResponse> {

    const requestEnrichment = {
      ...publishRequest,
      publicationTime: Date.now()
    };

    const postsDB = firebase.database().ref('/posts');
    const newDataref = postsDB.push();

    return newDataref.set(requestEnrichment)
      .then(() => Promise.resolve({ msg: 'Record had been added' }))
      .catch((msg) => Promise.reject({ msg }));
  }
}
