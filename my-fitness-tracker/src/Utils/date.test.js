import { describe, it, expect } from "vitest";
import { formatDate, formatSecondsToMinutes } from "./date";

describe("formatDate()", () => {
  it("should return the correct date string", () => {
    const input = "2022-12-12 17:28:58.387+00";
    const result = formatDate(input);
    expect(result).toBe("12/12/2022");
  });

  it("should format days with a starting 0 if less than 10", () => {
    const input = "2022-12-06 17:28:58.387+00";
    const result = formatDate(input);
    expect(result).toBe("06/12/2022");
  });

  it("should format months with a starting 0 if less than 10", () => {
    const input = "2022-01-12 17:28:58.387+00";
    const result = formatDate(input);
    expect(result).toBe("12/01/2022");
  });
});

describe("formatSecondsToMinutes()", () => {
  it("should return the time in seconds converted to minutes", () => {
    const input = 255;
    const result = formatSecondsToMinutes(input);
    expect(result).toBe("4min 15s");
  });

  it('should not say "min" if there is less than 1 minutes in seconds', () => {
    const input = 45;
    const result = formatSecondsToMinutes(input);
    expect(result).toBe("45s");
  });
});
