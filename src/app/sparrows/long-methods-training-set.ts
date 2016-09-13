import { createTrainingSet } from './training-set';

export const longMethodsTrainingSet = {
  title: "LongMethods",
  left: "Too Long ",
  right: "Short Enough ",
  baseUrl: "https://raw.githubusercontent.com/isidore/FluencyPowerPoint/master/PowerPointGeneration/PowerPointGeneration.Tests/CodeSmells-LongMethods/",
  examples: createTrainingSet({ name:"Too Long ", number:54, prefix:".png"}, { name:"Short Enough ", number:34, prefix:".png"})
};
