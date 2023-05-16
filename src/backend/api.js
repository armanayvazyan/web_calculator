const express = require('express')
const calculator = require("./calculator")
const router = express.Router();

router.post("/calculate",  (req, res) => {
    const {num1, num2, action} = req.query;
    let result;
    switch (action) {
        case "add": {
            result = calculator.add(Number(num1), Number(num2));
            break
        }
        case "subtract": {
            result = calculator.subtract(Number(num1), Number(num2));
            break
        }
        case "multiple": {
            result = calculator.multiply(Number(num1), Number(num2));
            break
        }
        case "divide": {
            result = calculator.divide(Number(num1), Number(num2));
            break
        }
        default: {
            result = "Wrong operation!"
        }
    }
    res.send(`${result}`);
});

module.exports = router;