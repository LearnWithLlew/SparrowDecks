import { createTrainingSet } from './training-set';

export const inconsistencyTrainingSet = {
  title: "Inconsistency",
  left: "Inconsistency ",
  right: "Duplication ",
  baseUrl: "https://raw.githubusercontent.com/isidore/FluencyPowerPoint/master/PowerPointGeneration/PowerPointGeneration.Tests/CodeSmells-Inconsistency/",
  examples: createTrainingSet({ name:"Duplication ", number:12, prefix:".png"}, { name:"Inconsistency ", number:13, prefix:".png"})
};
