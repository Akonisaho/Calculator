// calculator.js

// Selecting elements
const outputDisplay = document.querySelector('.output .value');
const resultDisplay = document.querySelector('.result .value');
const buttons = document.querySelectorAll('.calculator-button');


// Initialize variables
let currentInput = '';
let currentOperator = '';

// Adding event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Handling button clicks
function handleButtonClick(event) {
    const buttonValue = event.target.textContent;

    if (isNumeric(buttonValue)) {
        appendToOutput(buttonValue);
    } else if (isOperator(buttonValue)) {
        appendOperator(buttonValue);
    } else if (buttonValue === 'C') {
        clearOutput();
    } else if (buttonValue === '=') {
        calculate();
    }
}

// Check if a value is numeric
function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

// Check if a value is an operator
function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

// Append numeric values to the output
function appendToOutput(value) {
    currentInput += value;
    outputDisplay.textContent = currentInput;
}

// Append operators to the output
function appendOperator(operator) {
    currentOperator = operator;
    currentInput += ' ' + operator + ' ';
    outputDisplay.textContent = currentInput;
}

// Clear the output and result displays
function clearOutput() {
    currentInput = '';
    currentOperator = '';
    outputDisplay.textContent = '0';
    resultDisplay.textContent = '';
}

// Calculate the result and display it
function calculate() {
    try {
        let result = eval(currentInput);
        resultDisplay.textContent = result;
    } catch (error) {
        resultDisplay.textContent = 'Syntax Error!';
    }
}



