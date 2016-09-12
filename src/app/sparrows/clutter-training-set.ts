import { createTrainingSet } from './training-set';

export const clutterTrainingSet = {
  title: "Clutter",
  left: "Clutter ",
  right: "Relevant ",
  baseUrl: "https://raw.githubusercontent.com/isidore/FluencyPowerPoint/master/PowerPointGeneration/PowerPointGeneration.Tests/CodeSmells-Clutter/",
  examples: createTrainingSet({ name:"Clutter ", number:55, prefix:".png"}, { name:"Relevant ", number:30, prefix:".png"})
};
