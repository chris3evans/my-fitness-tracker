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

describe("touchSearch()", () => {
  it("should return an exercise typed capitalized", () => {
    const input = "Bike Machine";
    const result = touchSearch(cardioExerciseNames, input);
    expect(result).toStrictEqual(["Bike Machine"]);
  });

  it("should return an exercise typed lowercase", () => {
    const input = "bike machine";
    const result = touchSearch(cardioExerciseNames, input);
    expect(result).toStrictEqual(["Bike Machine"]);
  });

  it("should return an exercise typed uppercase", () => {
    const input = "BIKE MACHINE";
    const result = touchSearch(cardioExerciseNames, input);
    expect(result).toStrictEqual(["Bike Machine"]);
  });

  it("should return an empty array if no matching results", () => {
    const input = "Bikk Machine";
    const result = touchSearch(cardioExerciseNames, input);
    expect(result).toStrictEqual([]);
  });

  it("should throw an error if a non-array value is provided as a first argument", () => {
    const input = "Bike Machine";
    const invalidInput = "invalid";
    const resultFn = () => {
      touchSearch(invalidInput, input);
    };
    expect(resultFn).toThrow();
  });

  it("should return an empty array a non-string value is provided as a second argument", () => {
    const invalidInput = false;
    const resultFn = touchSearch(cardioExerciseNames, invalidInput);
    expect(resultFn).toStrictEqual([]);
  });
});
