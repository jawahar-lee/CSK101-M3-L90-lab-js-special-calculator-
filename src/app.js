// Progression 1: Create special addition

function specialAddition(num1, num2) {
  return num1 < 0
    ? 'Negative numbers are not allowed'
    : num2 < 0
    ? 'Negative numbers are not allowed'
    : num1 - num2;
}

// function specialAddition(){}

// Progression 2: Create simple division

function simpleDivision(num1, num2) {
  return num2 > num1
    ? 'Cannot divide a smaller number from a larger number'
    : num2 < 0
    ? 'Negative numbers are not allowed'
    : num2 == 0
    ? 'Not a number'
    : num1 / num2;
}

// Progression 3: Create the special calculator

function specialCalculator(num1, num2, operation) {
  return operation(num1, num2);
}
