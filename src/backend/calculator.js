function add(num1, num2) {
    checkType(num1, num2)
    return num1 + num2;
}

function subtract(num1, num2) {
    checkType(num1, num2)
    return num1 - num2;
}

function multiply(num1, num2) {
    checkType(num1, num2)
    return num1 * num2;
}

function divide(num1, num2) {
    checkType(num1, num2)
    if(num2 === 0) {
        return "Illegal arithmetic operation";
    }
    return num1 / num2;
}

function checkType(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Wrong type was passed";
    }
}

module.exports = {add, subtract, multiply, divide}


