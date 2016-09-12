import { createTrainingSet } from './training-set';

export const sparrowsTrainingSet = {
  title: "Sparrows",
  left: "House",
  right: "Song",
  baseUrl: "sparrow/images/",
  examples: createTrainingSet({ name:"Song", number:50, prefix:".jpeg"}, { name:"House", number:50, prefix:".jpeg"})
};
