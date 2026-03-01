const valueGood = 'expense-info__state-value--good'
const valueBad = 'expense-info__state-value--bad'

const expenseSpendingInputNode = document.querySelector('.expense-form__spending-input');
const expenseListInputNode = document.querySelector('.expense-form__list');
const expenseAddButton = document.querySelector('.expense-form__spending-btn-add');
const expenseLimitValue = document.querySelector('.expense-info__limit-value');
const expenseTotalValue = document.querySelector('.expense-info__total-value')
const expenseStateValue = document.querySelector('.expense-info__state-value');
const expenseChangeLimitButton = document.querySelector('.expense-info__limit-img-change');
const expenseResetButton = document.querySelector('.expense__btn-reset');

const popupSpendingInputNode = document.querySelector('.popup__spending-input');
const popupChangeLimitButton = document.querySelector('.popup__spending-btn-change');

let limit = 10000;
let sum = '';
let history = [];





