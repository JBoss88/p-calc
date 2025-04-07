'use strict';

const main = document.querySelector('main');
const buttons = document.querySelectorAll('button');
const row = document.querySelector('.row');
const calculate = document.querySelector('.calc');
const input = document.querySelector('input');

let num1;
let num2;
let operator = '';

main.addEventListener('click', e => {
  const clickedOp = e.target.closest('.operator');
  if (!clickedOp) return;
  operator = clickedOp.textContent;
});

main.addEventListener('click', e => {
  const clicked = e.target.closest('.num');
  if (!clicked) return;

  if (operator === '') {
    num1 = +clicked.textContent;
    input.value = num1;
  }

  if (operator !== '') {
    num2 = +clicked.textContent;
    input.value = num2;
  }
});

const add = (final1, final2) => {
  input.value = final1 + final2;
};

const operate = (n1, n2, op) => {
  if (op === '+') add(n1, n2);
};
calculate.addEventListener('click', () => {
  operate(num1, num2, operator);
});
