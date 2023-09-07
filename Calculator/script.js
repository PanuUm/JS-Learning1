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

function percent(firstNum, secondNum) {
    result = secondNum = (secondNum / firstNum) * 100;
}

function changeNum(value) {
    if (result && operator == '') {
        firstNum = '';
        display.innerHTML = '';
    }
    if (firstNum === '' || operator === '') {
        firstNum += value;
        display.innerHTML += value;
        console.log('firstNum', firstNum, typeof firstNum);
        return firstNum;
    } else {
        secondNum += value;
        display.innerHTML += value;
        console.log('secondNum', secondNum, typeof secondNum);
        return secondNum;
    }
}

function changeOperator(value) {
    if ( firstNum ) {
        operator += value;
        display.innerHTML += value;
        console.log('operator', operator, typeof (operator));
        return operator;
    } 
}

function operate() {

    if(firstNum === '' && operator === '' && secondNum === '') {
        return;
    } else {
        if(operator == '+') {
            add(parseFloat(firstNum), parseFloat(secondNum));
            console.log(firstNum, operator, secondNum, '=', result);            
        } else if(operator == '-') {
            subtract(parseFloat(firstNum), parseFloat(secondNum));
            console.log(firstNum, operator, secondNum, '=', result);
        } else if(operator == '*') {
            multiply(parseFloat(firstNum), parseFloat(secondNum));
            console.log(firstNum, operator, secondNum, '=', result);
        } else if(operator == '/') {
            divide(parseFloat(firstNum), parseFloat(secondNum));
            console.log(firstNum, operator, secondNum, '=', result);
        }
        display.innerHTML = result;
        firstNum = result;
        operator = '';
        secondNum = '';
    }
}

function deleteNum() {
    if (firstNum === '' || operator === '') {
        firstNum = firstNum.slice(0, -1);
        display.innerHTML = firstNum;
        console.log('firstNum', firstNum, typeof firstNum);
        return firstNum;
    } else {
        secondNum = secondNum.slice(0, -1);
        display.innerHTML = firstNum + operator + secondNum;
        console.log('secondNum', secondNum, typeof secondNum);
        return secondNum;
    }
}

function negative() {
    if (firstNum === '' || operator === '') {
        firstNum = firstNum * -1;
        display.innerHTML = firstNum;
        console.log('firstNum', firstNum, typeof firstNum);
        return firstNum;
    } else {
        secondNum = secondNum * -1;
        display.innerHTML = firstNum + operator + secondNum;
        console.log('secondNum', secondNum, typeof secondNum);
        return secondNum;
    }
}