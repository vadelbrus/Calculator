
// SETTING VARIABLES

let firstValue = "";
let secondValue = "";
let result = "";
let operatorFlag = false;
let isDecimal = false;
let isActive = true;
let mathOperator = "";

// CHECKING WHETHER USER IS TYPING FIRST OR SECOND NUMBER 

function numPressed(num) {
    if (operatorFlag) {

        // CHECKING IS DECIMAL IS CLICKED AND PREVENTING ITS DOUBLING

        if (num === ".") {
            if (isDecimal === false) {
                secondValue += num;
                isDecimal = true;
            }
        }
        else secondValue += num;
        document.querySelector('.display').value = secondValue;

    } else {

        // CHECKING IS DECIMAL IS CLICKED AND PREVENTING ITS DOUBLING - UNFORCH REPEATING THE SAME CODE... :( 

        if (num === ".") {
            if (isDecimal === false) {
                firstValue += num;
                isDecimal = true;
            }

        }
        else firstValue += num;
        document.querySelector('.display').value = firstValue

    }
}

// SETTING DEL KEY THAT REMOVES LAST DIGIT FROM NUMBER

function numPressedDelete() {

    if (isActive) {
        firstValue = firstValue.slice(0, -1);
        document.querySelector('.display').value = firstValue;

    }
    else {
        secondValue = secondValue.slice(0, -1);
        document.querySelector('.display').value = secondValue;
    }

}

// CHECKING IF USER CLICKS MATH OPERATOR

function operationPressed(operator) {
    operatorFlag = !operatorFlag;
    mathOperator = operator;
    document.querySelector('.display').value = operator;
    isActive = !isActive;
    isDecimal = false;

}

// MAKING CALCULATIONS DEPENDING ON CHOSEN OPERATOR

function numPressedResult() {

    // CHANGING STRINGS INTO NUMBERS SO MATH OPERATIONS CAN BE POSSIBLE

    firstValue = Number(firstValue);
    secondValue = Number(secondValue);

    // SOLVING DECIMAL PRECISION PROBLEM ADDING SOME MATH FUNCTIONS
    switch (mathOperator) {
        case "+":
            result = Math.round(parseFloat(((firstValue + secondValue) * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);

            break;
        case "-":
            result = Math.round(parseFloat(((firstValue - secondValue) * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);
            break;
        case "x":
            result = Math.round(parseFloat(((firstValue * secondValue) * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);
            break;
        case "/":
            result = Math.round(parseFloat(((firstValue / secondValue) * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);
            break;
        case "%":
            result = Math.round(parseFloat(((firstValue * (secondValue / 100)) * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);
            break;
        default:
            result = secondValue;

    }

    // RESETING VARIABLES

    document.querySelector('.display').value = result;
    // isDecimal = false;
    // firstValue = "";
    // secondValue = "";

    firstValue = "";
    secondValue = "";
    operatorFlag = false;
    isActive = true;
    isDecimal = false;
    // result = "";

}

// RESETING VARIABLES IF 'C' IS CLICKED

function numPressedClear() {
    firstValue = "";
    secondValue = "";
    result = "";
    operatorFlag = false;
    isActive = true;
    isDecimal = false;
    document.querySelector('.display').value = "0";
}

