import { describe, it, expect } from "vitest";

import { convertToLbs } from "./change-si";

describe("convertToLbs()", () => {
  it("should convert a value in kg to a it's equivalent in lb", () => {
    const inputWeight = 2;
    const result = convertToLbs(inputWeight);
    expect(result).toBe(String(4.41));
  });

  it("should return NaN if a non-numeric value is returned", () => {
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
});
