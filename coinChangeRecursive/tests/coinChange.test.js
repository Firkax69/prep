import coinChangeRecursive from "../src/coinChangeRecursive.js";

test("coinChangeRecirsive([1,2,5], 11) should return 3", () => {
    expect(coinChangeRecursive([1,2,5], 11)).toBe(3);
});

test("coinChangeRecirsive([2], 3) should return some string", () => {
    expect(coinChangeRecursive([2], 3)).toBe("not possible to achieve this amount with given coins");
});

test("coinChangeRecirsive([1], 0) should return 0", () => {
    expect(coinChangeRecursive([1], 0)).toBe(0);
});