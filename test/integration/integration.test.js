const request = require("supertest");
const app = require("../../src/app");

describe("Test calculator request functionality", () => {
    it("Addition operation works as expected", async () => {
        const num1 = 10;
        const num2 = 13;
        const action = "add";

        const response = await request(app).post(`/api/calculate?num1=${num1}&num2=${num2}&action=${action}`)
        expect(response.text).toBe(String(num1+num2));
    });

    it("Multiple operation works as expected", async () => {
        const num1 = 10;
        const num2 = 13;
        const action = "multiple";

        const response = await request(app).post(`/api/calculate?num1=${num1}&num2=${num2}&action=${action}`)
        expect(response.text).toBe(String(num1*num2));
    });
});