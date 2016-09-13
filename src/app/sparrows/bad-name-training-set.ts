import { createTrainingSet } from './training-set';

export const badNameTrainingSet = {
  title: "Bad Names",
  left: "Bad ",
  right: "Good ",
  baseUrl: "https://raw.githubusercontent.com/isidore/FluencyPowerPoint/master/PowerPointGeneration/PowerPointGeneration.Tests/CodeSmells-BadNames/",
  examples: createTrainingSet({ name:"Bad ", number:33, prefix:".png"}, { name:"Good ", number:12, prefix:".png"})
};
