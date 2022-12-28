import { describe, it, expect } from "vitest";
import {
  resistanceExerciseNames,
  cardioExerciseNames,
  touchSearch,
} from "./touch-search";

describe("resistanceExerciseNames", () => {
  it("should exist", () => {
    expect(resistanceExerciseNames).toBeTruthy();
  });

  it("should be of type Array", () => {
    const isArray = Array.isArray(resistanceExerciseNames);
    expect(isArray).toBe(true);
  });

  it("should only contain string elements", () => {
    const onlyStrings = resistanceExerciseNames.some((name) => {
      return typeof name !== "string";
    });
    expect(onlyStrings).toBe(false);
  });
});

describe("cardioExerciseNames", () => {
  it("should exist", () => {
    expect(cardioExerciseNames).toBeTruthy();
  });

  it("should be of type Array", () => {
    const isArray = Array.isArray(cardioExerciseNames);
    expect(isArray).toBe(true);
  });

  it("should only contain string elements", () => {
    const onlyStrings = cardioExerciseNames.some((name) => {
      return typeof name !== "string";
    });
    expect(onlyStrings).toBe(false);
  });
});
