import { createTrainingSet } from './training-set';

export const goRustAssignmentsTrainingSet = {
    title: "Go vs Rust",
    left: "Go.Assignment.",
    right: "Rust.Assignment.",
    baseUrl: "languages/",
    examples: createTrainingSet({ name: "Go.Assignment.", number: 19, prefix: ".png" }, { name: "Rust.Assignment.", number: 18, prefix: ".png" })
};

export const haskellRustAssignmentsTrainingSet = {
    title: "Haskell vs Rust",
    left: "Haskell.Assignment.",
    right: "Rust.Assignment.",
    baseUrl: "languages/",
    examples: createTrainingSet({ name: "Go.Assignment.", number: 17, prefix: ".png" }, { name: "Rust.Assignment.", number: 18, prefix: ".png" })
};

export const goRustTrainingSet = {
    title: "Go vs Rust",
    left: "Go.",
    right: "Rust.",
    baseUrl: "languages/",
    examples: createTrainingSet({ name: "Go.", number: 23, prefix: ".png" }, { name: "Rust.", number: 23, prefix: ".png" })
};

export const haskellRustTrainingSet = {
    title: "Haskell vs Rust",
    left: "Haskell.",
    right: "Rust.",
    baseUrl: "languages/",
    examples: createTrainingSet({ name: "Go.", number: 21, prefix: ".png" }, { name: "Rust.", number: 21, prefix: ".png" })
};
