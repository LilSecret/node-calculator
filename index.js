const rs = require('readline-sync');

var operationTypes = ['/', '+', '*', '-', '%'];

var operationStarted;

while (!operationStarted) {
  operationStarted = true;
  var operation = rs.question('What operation would you like to perform? ');

  if (operationTypes.includes(operation) ) {
    var firstNumber = rs.questionInt('Please enter the first number ');
    var secondNumber = rs.questionInt('Please enter the second number ');
    var calculation;
    
    if (operation === '/') {
      calculation = firstNumber / secondNumber;
    }
    if (operation === '+') {
      calculation = firstNumber + secondNumber; 
    }
    if (operation === '*') {
      calculation = firstNumber * secondNumber; 
    }
    if (operation === '-') {
      calculation = firstNumber - secondNumber;
    }
    if (operation === '%') {
      calculation = firstNumber % secondNumber;
    }

    console.log('The result is: ' + calculation);
  } else {
    console.log('That is not a valid operation');
    operationStarted = false;
  }
}
