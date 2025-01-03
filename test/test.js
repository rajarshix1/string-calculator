const { calculatorFinal,calculatorCommaSeparated, calculatorNewLineSeparated} = require("../index");

describe("calculator", () => {
    // test("should return true", () => {
    //     expect(calculatorCommaSeparated("")).toBe(0);
    // });
    // test("should return true", () => {
    //     expect(calculatorCommaSeparated("1")).toBe(1);
    // });
    // test("should return true", () => {
    //     expect(calculatorCommaSeparated("1,2,3")).toBe(6);
    // });
    // test("should return true", () => {
    //     expect(calculatorNewLineSeparated("1\n2\n3\n9")).toBe(15);
    // });
    test("should return true", () => {
        expect(calculatorFinal("//p\n1p2p3p9")).toBe(15);
    });
    test("should return true", () => {
        expect(calculatorFinal("1,2\n3,15")).toBe(21);
    });
    // test("should return true", () => {
    //     expect(calculatorFinal("1\n2\n3\n9")).toBe(15);
    // });
});