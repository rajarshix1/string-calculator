const { calculatorFinal,calculatorCommaSeparated, calculatorNewLineSeparated} = require("../index");

describe("calculator", () => {
    test("should return 0", () => {
        expect(calculatorFinal("")).toBe(0);
    });
    test("should return 1", () => {
        expect(calculatorFinal("1")).toBe(1);
    });
    test("only comma separated , should return 6", () => {
        expect(calculatorCommaSeparated("1,2,3")).toBe(6);
    });
    test("only new line separated , should return 15", () => {
        expect(calculatorNewLineSeparated("1\n2\n3\n9")).toBe(15);
    });

    ///
    test("should return 15, delimiter defined at beginning", () => {
        expect(calculatorFinal("//p\n1p2p3p9")).toBe(15);
    });
    test("should return 21, default delimiter comma and newline", () => {
        expect(calculatorFinal("1,2\n3,15")).toBe(21);
    });
    test("should return 6, multiple delimiter, single character", () => {
        expect(calculatorFinal("//[*][%]\n1*2%3")).toBe(6);
    });
    test("should return 6, multiple delimiter, more than one character", () => {
        expect(calculatorFinal("//[**][%%]\n1**2%%3")).toBe(6);
    });
    test("should return 6, multiple delimiter, more than one character", () => {
        expect(calculatorFinal("//[**][helloworld]\n1**2helloworld3")).toBe(6);
    });
    test("should ignore numbers larger than 1000", () => {
        expect(calculatorFinal("1,2\n3,15,1000,292929,7832947329847")).toBe(1021);
    });
    test("should return 15", () => {
        expect(calculatorFinal("1\n2\n3\n9")).toBe(15);
    });
    test("should throw error for negative numbers", () => {
        expect(() => calculatorFinal("-1,2\n3,15,-3")).toThrow('negatives not allowed : -1, -3');
    });
});