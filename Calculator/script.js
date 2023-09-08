const numberButton = document.querySelector('.btnNum');
const operationButton = document.querySelector('.btnOperator');
const equalButton = document.querySelector('.btnEqu');
const deleteButton = document.querySelector('.btnDel');
const clearButton = document.querySelector('.btnClear');
const display = document.querySelector('.display');
let firstNum = '';
let secondNum = '';
let operator = '';
let result = '';

function add(firstNum, secondNum) {
    result = firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    result = firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    result = firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    result = firstNum / secondNum;
}

function changeNum(value) {
    if (result && !operator) {
        firstNum = '';
        display.innerHTML = '';
    }
    if (!firstNum || !operator) {
        firstNum += value;
        display.innerHTML += value;
        return firstNum;
    } else {
        secondNum += value;
        display.innerHTML += value;
        return secondNum;
    }
}

function changeOperator(value) {
    if ( firstNum ) {
        operator += value;
        display.innerHTML += value;
        return operator;
    } 
}

function operate() {
    if(!firstNum && !operator && !secondNum) {
        return;
    } else {
        switch (operator) {
            case '+':
                add(parseFloat(firstNum), parseFloat(secondNum));
                break;
            case '-':
                subtract(parseFloat(firstNum), parseFloat(secondNum));
                break;
            case '*':
                multiply(parseFloat(firstNum), parseFloat(secondNum));
                break;
            case '/':
                divide(parseFloat(firstNum), parseFloat(secondNum));
                break;
        }
        display.innerHTML = result;
        firstNum = result;
        operator = '';
        secondNum = '';
    }
}

function deleteNum() {
    if (!firstNum || !operator) {
        firstNum = firstNum.slice(0, -1);
        display.innerHTML = firstNum;
        return firstNum;
    } else {
        secondNum = secondNum.slice(0, -1);
        display.innerHTML = firstNum + operator + secondNum;
        return secondNum;
    }
}

function negative() {
    if (!firstNum || !operator) {
        firstNum = firstNum * -1;
        display.innerHTML = firstNum;
        return firstNum;
    } else {
        secondNum = secondNum * -1;
        display.innerHTML = firstNum + operator + secondNum;
        return secondNum;
    }
}