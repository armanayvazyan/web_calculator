const calculator = require("../../src/backend/calculator")

describe("Test calculator functionality", () => {
    it("Addition operation works as expected", async () => {
        const num1 = 10;
        const num2 = 13;
        expect(calculator.add(num1, num2)).toBe(num1+num2);
    });

    it("Addition operation works as expected if string is passed", async () => {
        const num1 = 10;
        expect(calculator.add(num1, "num2")).toBe("Wrong type passed");
    });

    it("Multiple operation works as expected", async () => {
        const num1 = 10;
        const num2 = 13;
        expect(calculator.multiply(num1, num2)).toBe(num1*num2);
    });
});