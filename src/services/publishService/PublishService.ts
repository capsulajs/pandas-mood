import PublishServiceDefinition, { PublishRequest, PublishResponse } from '../api/PublishService'; // tslint:disable-line
import { scalecube } from '../../scalecube/src/index';


export class PublishService implements PublishServiceDefinition {
  publish(publishRequest: PublishRequest): Promise<PublishResponse> {

    const requestEnrichment = {
      ...publishRequest,
      publicationTime: Date.now()
    };

    //TODO send to firebase
    return Promise.resolve({})
  }
}

scalecube
    .builder()
    .services(new PublishService())
    .build();
