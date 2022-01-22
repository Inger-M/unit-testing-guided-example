function sum(a, b) {
  if (!a && !b) {
    return 0;
  } else if (a && !b) {
    return a;
  } else if (!a && b) {
    return b;
  } else return a + b;
}

function subtract(a, b) {
  if (!a && !b) {
    return 0;
  } else if (a && !b) {
    return a;
  } else if (!a && b) {
    return b;
  } else return a - b;
}

function divide(a, b) {
  if (!a && !b) {
    return 0;
  } else if (a && !b) {
    return error;
  } else if (!a && b) {
    return error;
  } else return a / b;
}

function multiply(a, b) {
  if (!a && !b) {
    return 0;
  } else if (a && !b) {
    return error;
  } else if (!a && b) {
    return error;
  } else return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
