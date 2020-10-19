function add (inputOne, inputTwo) {
	return inputOne + inputTwo;
}

function subtract (inputOne, inputTwo) {
	return inputOne - inputTwo;
}

function multiply(input) {
	if (input.length > 0) {
		return input.reduce((a, b) => a * b);
	}
	else {
	    return 0;
	}
}

function divide(inputOne, inputTwo) {
    return inputOne / inputTwo;
}

function power(inputOne, inputTwo) {
	return inputOne ** inputTwo;
}

/*
function factorial(num) {
	if (num === 0 || num === 1) {
		return 1;
	}

	else {
		for (let i = num - 1; i >= 1; i--) {
			num = num * i;
		}
	}
	return num;
}

function sum(input) {
    if (input.length > 0) {
      return input.reduce((a, b) => a + b);
    }
    else {
      return 0;
    }
}
*/

function operate(operator, numOne, numTwo) {
	if (operator === "+") {
		add(numOne, numTwo);
	}
	else if (operator === "-") {
		subtract(numOne, numTwo);
	}
	else if (operator === "*") {
		multiply(numOne, numTwo);
	}
	else if (operator === "/") {
		divide(numOne, numTwo);
	}
}