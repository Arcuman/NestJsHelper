import cluster from 'cluster';
import { cpus } from 'os';

const numberOfCores = cpus().length;

console.log(numberOfCores);
export function runInCluster(bootstrap: () => Promise<void>) {
  if (cluster.isPrimary) {
    for (let i = 0; i < numberOfCores; ++i) {
      cluster.fork();
    }
  } else {
    bootstrap();
  }
}
