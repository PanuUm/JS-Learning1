const numberButton = document.querySelector('.btnNum');
const operationButton = document.querySelector('.btnOperator');
const equalButton = document.querySelector('.btnEqu');
const deleteButton = document.querySelector('.btnDel');
const clearButton = document.querySelector('.btnClear');
const display = document.querySelector('.display');
let firstNum = '';
let secondNum = '';
let operator = '';

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

function percent(firstNum, secondNum) {
    return secondNum = (secondNum / firstNum) * 100;
}

function changeNum(value) {
    if (firstNum === '' || operator === '') {
        firstNum += value;
        display.innerHTML += value;
        console.log('firstNum', firstNum);
        return firstNum;
    } else {
        secondNum += value;
        display.innerHTML += value;
        console.log('secondNum', secondNum);
        return secondNum;
    }
}

function changeOperator(value) {
    if ( firstNum != 'number') {
        operator += value;
        display.innerHTML += value;
        console.log('operator', operator, typeof (operator));
        return operator;
    } 
}

function operate(firstNum, operator, secondNum) {
    

    if(firstNum === '' || operator === '' || secondNum === '') {
        return;
    } else if (firstNum != '' || operator != '' || secondNum != '') {
        if(operate = '+') {
            display.innerHTML = add(firstNum, secondNum);
            console.log(firstNum, secondNum);
        } else if(operate = '-') {
            display.innerHTML = subtract(firstNum, secondNum);
            console.log(firstNum, secondNum);
        }
    }
}