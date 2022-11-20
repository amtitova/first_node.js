import calculateBonus from "./calculateBonus";

describe("test suite for CalculateBonus", () => {
  it("result > 50", () => {
    expect(calculateBonus(50, 1)).toBe(50);
    expect(calculateBonus(1, 50)).toBe(50);
    expect(calculateBonus(51, 1)).toBe(50);
    expect(calculateBonus(1, 51)).toBe(50);
  });

  it("result 50", () => {
    expect(calculateBonus(49, 1)).toBe(50);
    expect(calculateBonus(1, 49)).toBe(50);
    expect(calculateBonus(50, 0)).toBe(50);
    expect(calculateBonus(0, 50)).toBe(50);
  });

  it("result < 50", () => {
    expect(calculateBonus(49, 0)).toBe(49);
    expect(calculateBonus(0, 49)).toBe(49);
    expect(calculateBonus(48, 0)).toBe(48);
    expect(calculateBonus(0, 48)).toBe(48);
    expect(calculateBonus(0, 0)).toBe(0);
  });

  it("without parameters", () => {
    expect(calculateBonus()).toBe(NaN);
  });

  it("with one parameter", () => {
    expect(calculateBonus(1)).toBe(NaN);
    expect(calculateBonus(undefined, 1)).toBe(NaN);
  });

  it("with negativ values", () => {
    expect(calculateBonus(-1, -49)).toBe(-50);
    expect(calculateBonus(-49, -1)).toBe(-50);
  });

  it("with negativ values", () => {
    expect(calculateBonus(-1, -49)).toBe(-50);
    expect(calculateBonus(-49, -1)).toBe(-50);
  });
});
