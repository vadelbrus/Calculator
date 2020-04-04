
let firstValue = "";
let secondValue = "";
let result = "";
let operatorFlag = false;


function numPressed(num) {

    if (!operatorFlag) {
        firstValue += num;
        document.querySelector('.display').value = firstValue;
    } else {
        secondValue += num;
        document.querySelector('.display').value = secondValue;
    }
}

function operationPressed(operator) {
    operatorFlag = true;
    document.querySelector('.display').value = "";
    firstValue = "";
    secondValue = "";
}


