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

const clear = document.querySelector("#clear");
const displayContent = document.querySelector("#displayContent");
const numbers = document.querySelectorAll(".number");

//push user input to array and update display content with user input
let numbersArr = [];

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", () => {
		if (numbersArr.length === 0) {
			displayContent.textContent = numbers[i].textContent;
		}
		else if (numbersArr.length < 14) {
			displayContent.textContent += numbers[i].textContent;
		}
		numbersArr.push(numbers[i].textContent);
	})
}

//implement function for clearing display and array from user input
clear.addEventListener("click", () => {
	displayContent.textContent = "0";
	for (let j = numbersArr.length; j > 0; j--) {
		numbersArr.pop();
	}
})