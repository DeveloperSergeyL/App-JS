const resylt = document.querySelector('.resylt');
const buttonPlus = document.querySelector('.counter__button-plus');
const buttonReset = document.querySelector('.counter__button-reset');

import { removeClassOpen } from "../script.js"
import { addClassOpen } from "../script.js"

let counter = 0;

inner()

function inner() {
    buttonPlus.addEventListener('click', function () {
        counter += 1;
        resylt.innerHTML = counter;
        addClassOpen(buttonReset);
    })
    buttonReset.addEventListener('click', function () {
        removeClassOpen(this);
        counter = 0;
        resylt.innerHTML = counter;
    })
}

