import { Headers } from '@angular/http';

import { sparrowsTrainingSet } from './sparrows-training-set';
import { clutterTrainingSet } from './clutter-training-set';
import { complexTrainingSet } from './complex-training-set';
import { badNameTrainingSet } from './bad-name-training-set';
import { duplicationTrainingSet } from './duplication-training-set';
import { longLinesTrainingSet } from './long-lines-training-set';
import { longMethodsTrainingSet } from './long-methods-training-set';
import { inconsistencyTrainingSet } from './inconsistency-training-set';

export const trainingSetDirectory = {
    sparrows: sparrowsTrainingSet,
    clutter: clutterTrainingSet,
    complex: complexTrainingSet,
    badNames: badNameTrainingSet,
    duplication: duplicationTrainingSet,
    longLines: longLinesTrainingSet,
    longMethods: longMethodsTrainingSet,
    inconsistency: inconsistencyTrainingSet,
};
