import { getPercents } from "../../utils/getPercents.js";

describe("tests for getPercents function", () => {
  it("should return 60", () => expect(getPercents(30, 200)).toBe(60));
  it("should return 80", () => expect(getPercents(40, 200)).toBe(80));
  it("should return 'Invalid percent'", () => expect(getPercents(120, 200)).toBe("Invalid percent"));
});