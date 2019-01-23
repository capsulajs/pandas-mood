import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/if';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import set from 'lodash/set';
import get from 'lodash/get';
import { generateProxy } from './generateProxy';
import AuthService from '@markets-pulse/auth-service/src/AuthService';

const requireAuth = ({ meta, message }) => meta.methods[message.method].requireAuth;

export default (source$) => {
  return source$
    .map(source => ({ ...source, auth: generateProxy(source.thisMs, AuthService) }))
    .switchMap((source) => {
      return Observable.if(
        () => !requireAuth(source),
        Observable.of(source),
        source.auth
          .sessionStatus$()
          .take(1)
          .map((status) => {
            // Try to enrich request in case authentication is required for this request
            const { authenticated, sessionId, traderId } = status;

            if (!authenticated) {
              throw new Error('User is not logged in');
            }

            const currentData = get(source, 'message.data[0]', {});
            set(source, 'message.data[0]', { ...currentData, sessionId, traderId });
            return source;
          })
      );
    });
};
