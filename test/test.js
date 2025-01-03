const calculator = require("../index");

describe("calculator", () => {
    test("should return true", () => {
        expect(calculator("1,2,3")).toBe(6);
    });
    test("should return true", () => {
        expect(calculator("1,2,d")).toBe(NaN);
    });
});