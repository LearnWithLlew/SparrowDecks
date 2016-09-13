import { createTrainingSet } from './training-set';

export const duplicationTrainingSet = {
  title: "Duplication",
  left: "Duplication ",
  right: "Distinct ",
  baseUrl: "https://raw.githubusercontent.com/isidore/FluencyPowerPoint/master/PowerPointGeneration/PowerPointGeneration.Tests/CodeSmells-Duplication/",
  examples: createTrainingSet({ name:"Distinct ", number:28, prefix:".png"}, { name:"Duplication ", number:52, prefix:".png"})
};
