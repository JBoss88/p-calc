'use strict';

const main = document.querySelector('main');
const buttons = document.querySelectorAll('button');
const row = document.querySelector('.row');
const calculate = document.querySelector('.calc');
const input = document.querySelector('input');
const clear = document.querySelector('.ac');

let num1 = '';
let num2 = '';
let operator = '';
let isSecondNumber = false;

main.addEventListener('click', e => {
  const clickedOp = e.target.closest('.operator');
  if (!clickedOp) return;

  if (num1 === '') {
    input.value = '';
    input.placeholder = 'Enter a number first!';
    return; // Exits the event listener early
  }
  operator = clickedOp.textContent;
  isSecondNumber = true;
});

main.addEventListener('click', e => {
  const clicked = e.target.closest('.num');
  if (!clicked) return;

  const digit = clicked.textContent;

  if (!isSecondNumber) {
    num1 += digit;
    input.value = num1;
  }

  if (isSecondNumber) {
    num2 += digit;
    input.value = num2;
  }
});

const add = (f1, f2) => {
  input.value = f1 + f2;
};

const subtract = (f1, f2) => {
  input.value = f1 - f2;
};

const multiply = (f1, f2) => {
  input.value = f1 * f2;
};

const divide = (f1, f2) => {
  if (f2 === 0) {
    input.value = "Can't divide by 0";
    return;
  } else {
    input.value = (f1 / f2).toFixed(2);
  }
};

const operate = (n1, n2, op) => {
  if (op === '+') add(n1, n2);
  if (op === '-') subtract(n1, n2);
  if (op === '*') multiply(n1, n2);
  if (op === '/') divide(n1, n2);
};

calculate.addEventListener('click', () => {
  operate(+num1, +num2, operator);
});

const clearContent = () => {
  input.value = '';
  num1 = '';
  num2 = '';
  operator = '';
  isSecondNumber = false;
  input.placeholder = '123';
};
clear.addEventListener('click', clearContent);
