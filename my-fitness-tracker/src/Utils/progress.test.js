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
const mockData5 = {
  maxweight: 2,
  sets: 2,
  reps: 2,
};
const mockData6 = {
  maxweight: 1,
  sets: 2,
  reps: 2,
};
const mockData7 = {
  maxweight: 2,
  sets: 1,
  reps: 2,
};
const mockData8 = {
  maxweight: 2,
  sets: 2,
  reps: 1,
};

const mockData9 = {
  maxspeed: 1,
  sets: 1,
  time: 1,
};
const mockData10 = {
  maxspeed: 2,
  sets: 1,
  time: 1,
};
const mockData11 = {
  maxspeed: 1,
  sets: 2,
  time: 1,
};
const mockData12 = {
  maxspeed: 1,
  sets: 1,
  time: 2,
};
const mockData13 = {
  maxspeed: 2,
  sets: 2,
  time: 2,
};
const mockData14 = {
  maxspeed: 1,
  sets: 2,
  time: 2,
};
const mockData15 = {
  maxspeed: 2,
  sets: 1,
  time: 2,
};
const mockData16 = {
  maxspeed: 2,
  sets: 2,
  time: 1,
};

describe("checkResistanceProgress()", () => {
  it('should return 3 "same" if first row of data', () => {
    const input = [mockData1];
    const result = checkResistanceProgress(input);
    expect(result).toStrictEqual(["same", "same", "same"]);
  });

  it('should return 3 "same" if weight, sets and reps are equal to the previous session', () => {
    const input = [mockData1, mockData1];
    const result = checkResistanceProgress(input);
    expect(result[1]).toStrictEqual(["same", "same", "same"]);
  });

  it('should return 3 "improve" even if just weight is greater than previous session', () => {
    const input = [mockData1, mockData4];
    const result = checkResistanceProgress(input);
    expect(result[1]).toStrictEqual(["improve", "improve", "improve"]);
  });

  it('should return 2 "improve" for sets being greater than previous session', () => {
    const input = [mockData1, mockData3];
    const result = checkResistanceProgress(input);
    expect(result[1]).toStrictEqual(["same", "improve", "improve"]);
  });

  it('should return 1 "improve" if just reps are greater than previous session', () => {
    const input = [mockData1, mockData2];
    const result = checkResistanceProgress(input);
    expect(result[1]).toStrictEqual(["same", "same", "improve"]);
  });

  it('should return 3 "worse" even if just weight is less than previous session', () => {
    const input = [mockData5, mockData6];
    const result = checkResistanceProgress(input);
    expect(result[1]).toStrictEqual(["worse", "worse", "worse"]);
  });

  it('should return 2 "worse" for sets being less than previous session', () => {
    const input = [mockData5, mockData7];
    const result = checkResistanceProgress(input);
    expect(result[1]).toStrictEqual(["same", "worse", "worse"]);
  });

  it('should return 1 "worse" if just reps are worse than previous session', () => {
    const input = [mockData5, mockData8];
    const result = checkResistanceProgress(input);
    expect(result[1]).toStrictEqual(["same", "same", "worse"]);
  });

  it("should throw an error with correct error message if a non-array input is provided", () => {
    const inputString = "invalid";
    const inputObject = mockData1;
    const inputBool = false;

    const resultFn1 = checkResistanceProgress(inputString);
    const resultFn2 = checkResistanceProgress(inputObject);

    const resultFn3 = checkResistanceProgress(inputBool);

    expect(resultFn1).toBe("Invalid input");
    expect(resultFn2).toBe("Invalid input");
    expect(resultFn3).toBe("Invalid input");
  });

  it("should throw an error with correct error message if an empty array is provided", () => {
    const input = [];
    const resultFn = checkResistanceProgress(input);

    expect(resultFn).toBe("No session data provided");
  });
});

describe("checkCardioProgress()", () => {
  it('should return 3 "same" if first row of data', () => {
    const input = [mockData9];
    const result = checkCardioProgress(input);
    expect(result).toStrictEqual(["same", "same", "same"]);
  });

  it('should return 3 "same" if maxspeed, sets and time are equal to the previous session', () => {
    const input = [mockData9, mockData9];
    const result = checkCardioProgress(input);
    expect(result[0]).toStrictEqual(["same", "same", "same"]);
  });

  it('should return 3 "improve" even if just maxpseed is greater than previous session', () => {
    const input = [mockData9, mockData10];
    const result = checkCardioProgress(input);
    expect(result[1]).toStrictEqual(["improve", "improve", "improve"]);
  });

  it('should return 2 "improve" for sets greater than previous session', () => {
    const input = [mockData9, mockData11];
    const result = checkCardioProgress(input);
    expect(result[1]).toStrictEqual(["same", "improve", "improve"]);
  });

  it('should return 1 "improve" if just time is greater than previous session', () => {
    const input = [mockData9, mockData12];
    const result = checkCardioProgress(input);
    expect(result[1]).toStrictEqual(["same", "same", "improve"]);
  });

  it('should return 3 "worse" even if just maxspeed is less than previous session', () => {
    const input = [mockData13, mockData14];
    const result = checkCardioProgress(input);
    expect(result[1]).toStrictEqual(["worse", "worse", "worse"]);
  });

  it('should return 2 "worse" for sets being less than previous session', () => {
    const input = [mockData13, mockData15];
    const result = checkCardioProgress(input);
    expect(result[1]).toStrictEqual(["same", "worse", "worse"]);
  });

  it('should return 1 "worse" for just time being less than previous session', () => {
    const input = [mockData13, mockData16];
    const result = checkCardioProgress(input);
    expect(result[1]).toStrictEqual(["same", "same", "worse"]);
  });

  it("should throw an error with correct error message if a non-array input is provided", () => {
    const inputString = "invalid";
    const inputObject = mockData1;
    const inputBool = false;

    const resultFn1 = checkResistanceProgress(inputString);
    const resultFn2 = checkResistanceProgress(inputObject);

    const resultFn3 = checkResistanceProgress(inputBool);

    expect(resultFn1).toBe("Invalid input");
    expect(resultFn2).toBe("Invalid input");
    expect(resultFn3).toBe("Invalid input");
  });

  it("should throw an error with correct error message if an empty array is provided", () => {
    const input = [];
    const resultFn = checkResistanceProgress(input);

    expect(resultFn).toBe("No session data provided");
  });
});
