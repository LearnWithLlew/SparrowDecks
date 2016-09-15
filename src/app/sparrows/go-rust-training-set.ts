import { createTrainingSet } from './training-set';

export const goRustTrainingSet = {
    title: "Go vs Rust",
    left: "Go.Assignment.",
    right: "Rust.Assignment.",
    baseUrl: "languages/",
    examples: createTrainingSet({ name: "Go.Assignment.", number: 19, prefix: ".png" }, { name: "Rust.Assignment.", number: 18, prefix: ".png" })
};
