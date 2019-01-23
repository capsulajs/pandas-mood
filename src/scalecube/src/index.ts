import { Microservices } from '@scalecube/scalecube-services/es/services';
import { generateProxy } from './generateProxy';
import authMiddleware from './authMiddleware';

const scInst: Microservices[] = window['scInst'] = window['scInst'] || [];

const registerServices = (registery, services) => {
  for (const serviceName in services.serviceRegistery.services) {
    const serviceInstances = services.serviceRegistery.services[serviceName];
    for (let serviceIdx = 0; serviceIdx < serviceInstances.length; serviceIdx += 1) {
      const service = serviceInstances[serviceIdx];
      registery.serviceRegistery.register(service);
    }
  }
};

const syncScalecubeInstances = () => {
  const newScalecubeInst = scInst[scInst.length - 1];
  for (let i = 0; i < scInst.length - 1; i += 1) {
    const oldScalecubeInst = scInst[i];
    registerServices(oldScalecubeInst, newScalecubeInst);
    registerServices(newScalecubeInst, oldScalecubeInst);
  }
};

const createBuilder = () => {
  const builder = Microservices
    .builder()
    .preRequest(authMiddleware);

  return new Proxy(builder, {
    get: (obj, prop): any => {
      if (prop === 'build') {
        const sc = obj.build();
        scInst.push(sc);
        syncScalecubeInstances();
        return () => sc;
      }
      return (obj as any)[prop];
    }
  });
};

const scalecube = {
  builder: () => createBuilder()
};

export { scalecube, generateProxy };
