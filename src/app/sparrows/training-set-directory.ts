import { Headers } from '@angular/http';

import { sparrowsTrainingSet } from './sparrows-training-set';
import { clutterTrainingSet } from './clutter-training-set';
import { complexTrainingSet } from './complex-training-set';

export const trainingSetDirectory = {
  sparrows: sparrowsTrainingSet,
  clutter: clutterTrainingSet,
  complex: complexTrainingSet
};
