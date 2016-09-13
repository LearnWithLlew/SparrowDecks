import { createTrainingSet } from './training-set';

export const longLinesTrainingSet = {
  title: "LongLines",
  left: "Too Long ",
  right: "Short Enough ",
  baseUrl: "https://raw.githubusercontent.com/isidore/FluencyPowerPoint/master/PowerPointGeneration/PowerPointGeneration.Tests/CodeSmells-LongLines/",
  examples: createTrainingSet({ name:"Too Long ", number:14, prefix:".png"}, { name:"Short Enough ", number:8, prefix:".png"})
};
