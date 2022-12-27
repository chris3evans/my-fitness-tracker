import { describe, it, expect } from "vitest";

import { convertToLbs, convertToKmh } from "./change-si";

describe("convertToLbs()", () => {
  it("should convert a value in kg to a it's equivalent in lb", () => {
    const inputWeight = 2;
    const result = convertToLbs(inputWeight);
    expect(result).toBe(String(4.41));
  });

  it("should return NaN if a non-numeric value is passed", () => {
    const inputString = "invalid";
    const inputObject = {};
    const inputBool = false;

    const result1 = convertToLbs(inputString);
    const result2 = convertToLbs(inputObject);
    const result3 = convertToLbs(inputBool);

    expect(result1).toBeNaN();
    expect(result2).toBeNaN();
    expect(result3).toBeNaN();
  });

  it("should return 0.00 if 0 is passed as an argument", () => {
    const input = 0;
    const result = convertToLbs(input);
    expect(result).toBe("0.00");
  });
});

describe("convertToKmh", () => {
  it("should convert a value in mph to it's equivalent in kmh", () => {
    const input = 1;
    const result = convertToKmh(input);
    expect(result).toBe(String(1.61));
  });

  it("should return NaN if a non numeric value is passed", () => {
    const inputString = "invalid";
    const inputObject = {};
    const inputBool = false;

    const result1 = convertToKmh(inputString);
    const result2 = convertToKmh(inputObject);
    const result3 = convertToKmh(inputBool);

    expect(result1).toBe(NaN);
    expect(result2).toBe(NaN);
    expect(result3).toBe(NaN);
  });

  it("should return 0.00 if 0 is passed as an argument", () => {
    const input = 0;
    const result = convertToKmh(input);
    expect(result).toBe("0.00");
  });
});
