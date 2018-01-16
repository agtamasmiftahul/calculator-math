var basicA = document.querySelector('#basic-a');
var basicB = document.querySelector('#basic-b');
var advancedA = document.querySelector('#advanced-a');
var advancedB = document.querySelector('#advanced-b');

var addButton = document.querySelector('#add-button');
var substractButton = document.querySelector('#substract-button');
var multiplyButton = document.querySelector('#multiply-button');
var divideButton = document.querySelector('#divide-button');
var remainderButton = document.querySelector('#remainder-button');
var advancedFirstButton = document.querySelector('#add-substract-divide-button');
var advancedSecondButton = document.querySelector('#substract-add-multiply-button');

var result;
var messageToast;
var duration;

function showToast(messageToast, duration) {
  Materialize.toast(messageToast, duration);
}

function add(firstNumber, secondNumber) {
  result = firstNumber + secondNumber;
  return result;
}

function substract(firstNumber, secondNumber) {
  result = firstNumber - secondNumber;
  return result;
}

function multiply(firstNumber, secondNumber) {
  result = firstNumber * secondNumber;
  return result;
}

function divide(firstNumber, secondNumber) {
  result = firstNumber / secondNumber;
  return result;
}

function remainder(firstNumber, secondNumber) {
  result = firstNumber % secondNumber;
  return result;
}

function showAdd() {
  var firstNumber = basicA.value;
  var secondNumber = basicB.value;
  if (isNaN(firstNumber) !== true && isNaN(secondNumber) !== true) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    add(firstNumber, secondNumber);
    showToast(`${firstNumber} + ${secondNumber} = ${result}`, 1000);
  } else if (isNaN(firstNumber) !== true && isNaN(secondNumber) === true) {
    showToast('Your first input is a number, but your second input is not a number. Please, input a number', 1000);
  } else if (isNaN(firstNumber) === true && isNaN(secondNumber) !== true) {
    showToast('Your second input is a number, but your first input is not a number. Please, input a number', 1000);
  } else {
    showToast('Please, input a number', 1000);
  }
}

function showSubstract() {
  var firstNumber = basicA.value;
  var secondNumber = basicB.value;
  if (isNaN(firstNumber) !== true && isNaN(secondNumber) !== true) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    substract(firstNumber, secondNumber);
    showToast(`${firstNumber} - ${secondNumber} = ${result}`, 1000);
  } else if (isNaN(firstNumber) !== true && isNaN(secondNumber) === true) {
    showToast('Your first input is a number, but your second input is not a number. Please, input a number', 1000);
  } else if (isNaN(firstNumber) === true && isNaN(secondNumber) !== true) {
    showToast('Your second input is a number, but your first input is not a number. Please, input a number', 1000);
  } else {
    showToast('Please, input a number', 1000);
  }
}

function showMultiply() {
  var firstNumber = basicA.value;
  var secondNumber = basicB.value;
  if (isNaN(firstNumber) !== true && isNaN(secondNumber) !== true) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    multiply(firstNumber, secondNumber);
    showToast(`${firstNumber} x ${secondNumber} = ${result}`, 1000);
  } else if (isNaN(firstNumber) !== true && isNaN(secondNumber) === true) {
    showToast('Your first input is a number, but your second input is not a number. Please, input a number', 1000);
  } else if (isNaN(firstNumber) === true && isNaN(secondNumber) !== true) {
    showToast('Your second input is a number, but your first input is not a number. Please, input a number', 1000);
  } else {
    showToast('Please, input a number', 1000);
  }
}

function showDivide() {
  var firstNumber = basicA.value;
  var secondNumber = basicB.value;
  if (isNaN(firstNumber) !== true && isNaN(secondNumber) !== true) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    divide(firstNumber, secondNumber);
    showToast(`${firstNumber} / ${secondNumber} = ${result}`, 1000);
  } else if (isNaN(firstNumber) !== true && isNaN(secondNumber) === true) {
    showToast('Your first input is a number, but your second input is not a number. Please, input a number', 1000);
  } else if (isNaN(firstNumber) === true && isNaN(secondNumber) !== true) {
    showToast('Your second input is a number, but your first input is not a number. Please, input a number', 1000);
  } else {
    showToast('Please, input a number', 1000);
  }
}

function showRemainder() {
  var firstNumber = basicA.value;
  var secondNumber = basicB.value;
  if (isNaN(firstNumber) !== true && isNaN(secondNumber) !== true) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    remainder(firstNumber, secondNumber);
    showToast(`${firstNumber} % ${secondNumber} = ${result}`, 1000);
  } else if (isNaN(firstNumber) !== true && isNaN(secondNumber) === true) {
    showToast('Your first input is a number, but your second input is not a number. Please, input a number', 1000);
  } else if (isNaN(firstNumber) === true && isNaN(secondNumber) !== true) {
    showToast('Your second input is a number, but your first input is not a number. Please, input a number', 1000);
  } else {
    showToast('Please, input a number', 1000);
  }
}

function showAdvancedFirst() {
  var firstNumber = advancedA.value;
  var secondNumber = advancedB.value;
  if (isNaN(firstNumber) !== true && isNaN(secondNumber) !== true) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    add(substract(firstNumber, secondNumber), divide(firstNumber, secondNumber));
    showToast(`(${firstNumber} - ${secondNumber}) + (${firstNumber} / ${secondNumber}) = ${result}`, 1000);
  } else if (isNaN(firstNumber) !== true && isNaN(secondNumber) === true) {
    showToast('Your first input is a number, but your second input is not a number. Please, input a number', 1000);
  } else if (isNaN(firstNumber) === true && isNaN(secondNumber) !== true) {
    showToast('Your second input is a number, but your first input is not a number. Please, input a number', 1000);
  } else {
    showToast('Please, input a number', 1000);
  }
}

function showAdvancedSecond() {
  var firstNumber = advancedA.value;
  var secondNumber = advancedB.value;
  if (isNaN(firstNumber) !== true && isNaN(secondNumber) !== true) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    substract(add(firstNumber, secondNumber), multiply(firstNumber, secondNumber));
    showToast(`(${firstNumber} + ${secondNumber}) + (${firstNumber} x ${secondNumber}) = ${result}`, 1000);
  } else if (isNaN(firstNumber) !== true && isNaN(secondNumber) === true) {
    showToast('Your first input is a number, but your second input is not a number. Please, input a number', 1000);
  } else if (isNaN(firstNumber) === true && isNaN(secondNumber) !== true) {
    showToast('Your second input is a number, but your first input is not a number. Please, input a number', 1000);
  } else {
    showToast('Please, input a number', 1000);
  }
}

addButton.addEventListener(`click`, showAdd);
substractButton.addEventListener(`click`, showSubstract);
multiplyButton.addEventListener(`click`, showMultiply);
divideButton.addEventListener(`click`, showDivide);
remainderButton.addEventListener(`click`, showRemainder);

advancedFirstButton.addEventListener(`click`, showAdvancedFirst);
advancedSecondButton.addEventListener(`click`, showAdvancedSecond);