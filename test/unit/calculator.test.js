const { constant } = require("cypress/types/lodash");
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
    it("Addition operation works as expected if string is passed", async () => {
        const num1 =5
        const num2 = 'Asya'
        expect(calculator.add(num1, "num2")).toBe("Wrong type passed");
    });
    it("Separation operation works as expected if string is passed", async () => {
        const num1 = 6
        const num2 = 0
    expect(calculator.separation(num1, "num2")).toBe("Wrong type passed");
    });

});