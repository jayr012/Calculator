// Function to append numbers or operators to the screen
function appendToScreen(value) {
    // Get the current value in the screen
    let currentValue = document.getElementById('screen').value;

    // Prevent multiple decimal points in a number
    if (value === '.' && currentValue.includes('.')) {
        return;
    }

    // Prevent appending operators after another operator
    if (['+', '-', '*', '/', '%'].includes(value) && ['+', '-', '*', '/', '%'].includes(currentValue.slice(-1))) {
        return;
    }

    // Append the value (number or operator) to the screen
    document.getElementById('screen').value += value;
}

// Function to clear the screen (AC)
function clearScreen() {
    document.getElementById('screen').value = '';
}

// Function to delete the last character (DEL)
function deleteLastCharacter() {
    let currentValue = document.getElementById('screen').value;
    document.getElementById('screen').value = currentValue.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    let expression = document.getElementById('screen').value;
    try {
        // Use eval to calculate the expression
        document.getElementById('screen').value = eval(expression); // Evaluates the expression
    } catch (e) {
        document.getElementById('screen').value = 'Error'; // If invalid expression
    }
}
