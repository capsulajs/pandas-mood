import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

const tryObs = (method, req, errorMessage) => Observable.create((obs) => {
  const reObs = () => {
    method(req)
      .subscribe(
        n => obs.next(n),
        e => e.message === errorMessage ? setTimeout(reObs, 10) : obs.error(e),
        c => obs.complete(c)
      );
  };
  reObs();
});

const tryPromise = (method, req, errorMessage) => new Promise((resolve, reject) => {
  const rePromise = () => {
    method(req)
      .then(r => resolve(r))
      .catch(e => e.message === errorMessage ? setTimeout(rePromise, 10) : reject(e));
  };
  rePromise();
});

export const generateProxy = (sc, service) => {
  const reducer = (acc, methodName) => {
    const method = sc.proxy().api(service).create()[methodName];
    const errorMessage = `Service not found error: ${service.meta.name}.${methodName}`;

    if (service.meta.methods[methodName].type === 'Observable') {
      acc[methodName] = req => tryObs(method, req, errorMessage);
    }
    if (service.meta.methods[methodName].type === 'Promise') {
      acc[methodName] = req => tryPromise(method, req, errorMessage);
    }
    return acc;
  };
  return Object.keys(service.meta.methods).reduce(reducer, {});
};
