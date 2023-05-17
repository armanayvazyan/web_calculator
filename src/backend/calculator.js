function add(num1, num2) {
    if(!checkType(num1, num2)) {
        return "Wrong type passed"
    }
    return num1 + num2;
}

function subtract(num1, num2) {
    if(!checkType(num1, num2)) {
        return "Wrong type passed"
    }
    return num1 - num2;
}

function multiply(num1, num2) {
    if(!checkType(num1, num2)) {
        return "Wrong type passed"
    }
    return num1 * num2;
}

function divide(num1, num2) {
    if(!checkType(num1, num2)) {
        return "Wrong type passed"
    }
    if(num2 === 0) {
        return "Illegal arithmetic operation";
    }
    return num1 / num2;
}

function checkType(num1, num2) {
    return (typeof num1 === 'number'&& typeof num2 === 'number')

}

module.exports = {add, subtract, multiply, divide}


