import { createTrainingSet } from './training-set';

export const complexTrainingSet = {
  title: "Complex",
  left: "Complex ",
  right: "Complicated ",
  baseUrl: "https://raw.githubusercontent.com/isidore/FluencyPowerPoint/master/PowerPointGeneration/PowerPointGeneration.Tests/CodeSmells-Complex/",
  examples: createTrainingSet({ name:"Complex ", number:21, prefix:".png"}, { name:"Complicated ", number:23, prefix:".png"})
};
