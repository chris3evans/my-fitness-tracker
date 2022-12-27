import { describe, it, expect } from "vitest";
import { checkResistanceProgress, checkCardioProgress } from "./progress";

const mockData1 = {
  maxweight: 1,
  sets: 1,
  reps: 1,
};
const mockData2 = {
  maxweight: 1,
  sets: 1,
  reps: 2,
};
const mockData3 = {
  maxweight: 1,
  sets: 2,
  reps: 1,
};
const mockData4 = {
  maxweight: 2,
  sets: 1,
  reps: 1,
};

describe("checkResistanceProgress()", () => {
  it('should return a row of "same" if first row of data', () => {
    const input = [mockData1];
    const result = checkResistanceProgress(input);
    expect(result).toStrictEqual(["same", "same", "same"]);
  });

  it('should return 3 "improve" even if just weight is greater than previous session', () => {
    const input = [mockData1, mockData4];
    const result = checkResistanceProgress(input);
    expect(result[1]).toStrictEqual(["improve", "improve", "improve"]);
  });
});
