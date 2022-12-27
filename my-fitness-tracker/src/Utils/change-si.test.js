import { describe, it, expect } from "vitest";

import { convertToLbs } from "./change-si";

describe("convertToLbs()", () => {
  it("should convert a value in kg to a it's equivalent in lb", () => {
    const inputWeight = 2;

    const result = convertToLbs(inputWeight);

    expect(result).toBe(String(4.41));
  });
});
