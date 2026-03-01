import { togglePopup, POPUP_OPENED_CLASSNAME, popupNode } from "./popup.js";
import { removeClassOpen } from "../script.js";
import { addClassOpen } from "../script.js";

const VALUE_GOOD = 'expense-info__state-value--good';
const VALUE_BAD = 'expense-info__state-value--bad';

const expenseSpendingInputNode = document.querySelector('.expense-form__spending-input');
const expenseListInputNode = document.querySelector('.expense-form__list');
const expenseAddButton = document.querySelector('.expense-form__spending-btn-add');
const expenseHistoryNode = document.querySelector('.expense-info__history-list');
const expenseListValue = document.querySelector('.expense-form__list');
const expenseTotalValueNode = document.querySelector('.expense-info__total-value');
const expenseStateValueNode = document.querySelector('.expense-info__state-value');
const expenseSLimitValueNode = document.querySelector('.expense-info__limit-value');
const expenseResetButton = document.querySelector('.expense__btn-reset');

const popupSpendingInputNode = document.querySelector('.popup__spending-input');
const popupChangeLimitButton = document.querySelector('.popup__spending-btn-change');

let limit = 10000;
let sum = 0;
let history = [];

function addExpense({ expense, list }) {
    const spendingLen = expenseSpendingInputNode.value.length;
    if (spendingLen > 0) {
        history.push({
            expense,
            list
        });
    } else {
        alert('Введите потраченную сумму');
        return;
    }

}

function getExpenseFromUser() {
    const expense = Number(expenseSpendingInputNode.value);
    const list = expenseListValue.value;
    return {
        expense,
        list
    };
}

function getExpense() {
    return history;
}

function renderExpense() {
    const history = getExpense();
    let historyHTML = '';
    history.forEach((stor, index) => {
        index += 1
        historyHTML += `
            <li class="expense-info__history-item">
               ${index}.  ${stor.expense} руб. - ${stor.list}
            </li>
        `
    });
    expenseHistoryNode.innerHTML = historyHTML;
}

function removeSpendingInputValue() {
    expenseSpendingInputNode.value = "";
}

function summ() {
    return sum += Number(expenseSpendingInputNode.value);
}

function renderSum() {
    summ();
    expenseTotalValueNode.innerHTML = `<span>${sum} руб.</span>`;
}

function checkingLimit() {
    let name = expenseStateValueNode;
    if (sum > limit) {
        let difference = sum - limit;
        name.innerHTML = `все плохо (-${difference} руб)`;
        name.classList.remove(VALUE_GOOD);
        name.classList.add(VALUE_BAD);
    } else {
        name.innerHTML = `все хорошо`;
        name.classList.add(VALUE_GOOD);
        name.classList.remove(VALUE_BAD);
    }
}

expenseAddButton.addEventListener('click', function () {
    const expenseFromUser = getExpenseFromUser()
    addExpense(expenseFromUser);
    renderSum()
    renderExpense();
    checkingLimit()
    removeSpendingInputValue();
    addClassOpen(expenseResetButton);
})

function removeHistoryNode() {
    expenseHistoryNode.innerHTML = '';
}

function removeValue() {
    sum = 0;
    history = [];
}
function removeTotalValueNode() {
    expenseTotalValueNode.innerHTML = '0 руб.';
}
expenseResetButton.addEventListener('click', function () {
    removeValue()
    removeSpendingInputValue();
    removeHistoryNode();
    removeTotalValueNode()
    checkingLimit();
    removeClassOpen(expenseResetButton);
})

function chengeLimit() {
    limit = Number(popupSpendingInputNode.value);
    expenseSLimitValueNode.innerHTML = `${limit} руб.`;
    popupSpendingInputNode.value = '';
}

popupChangeLimitButton.addEventListener('click', function () {
    chengeLimit();
    togglePopup();
    checkingLimit();
})

document.addEventListener('keydown', function (event) {
    if (popupNode.classList.contains(POPUP_OPENED_CLASSNAME)) {
        if (event.key === 'Enter') {
            popupChangeLimitButton.click();
        }
    }
});