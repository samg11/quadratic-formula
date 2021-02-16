import { quadraticFormula } from './formula.js';

const answers = document.getElementById('answers');
const form = document.querySelector('form');

const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');

form.addEventListener('submit', e => {
    e.preventDefault();
    answers.innerText = quadraticFormula(a.value, b.value, c.value);
})