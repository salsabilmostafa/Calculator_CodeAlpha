let currentOperand = '';
let previousOperand = '';
let operation = undefined;
let fullExpression = '';
let lastResult = ''; // Store the last result here
let lastOperation = false; // Track if the last action was an operation
function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    fullExpression = '';
    lastResult = '';
    lastOperation = false;
    updateDisplay();
}

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + number.toString();
    fullExpression += number.toString(); // Append the number to the full expression
    lastOperation = false; // Reset lastOperation flag
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') {
        currentOperand = lastResult.toString();
        fullExpression +=currentOperand.toString()
        updateDisplay();
    }

    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    fullExpression += ` ${op} `; // Append the operator to the full expression
    updateDisplay();
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) 
        {
            current
        };
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    lastResult = computation; // Store the result in lastResult
    operation = undefined;
    previousOperand = '';
    fullExpression += `\n${computation}`; // Append the result to the full expression
    lastOperation = true;

    updateDisplay();
    currentOperand = '';
    previousOperand = '';
    fullExpression = ''; // Clear the expression for the next operation

}
function appendAns() {
    if (lastResult !== '') {
        currentOperand = lastResult.toString();
        fullExpression += lastResult.toString(); // Append the last result to the full expression
        lastOperation = false; // Reset lastOperation flag
        updateDisplay();
    }
}
function updateDisplay() {
    const display = document.getElementById('display');
    display.value = fullExpression;
    

}
