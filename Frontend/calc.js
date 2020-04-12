// SETTING VARIABLES

let firstValue = "";
let secondValue = "";
let result = "";
let isDecimal = false;
let mathOperator = "";
let subText = document.querySelector(".showOperation");

// CHECKING WHETHER USER IS TYPING FIRST OR SECOND NUMBER 

function numPressed(num) {
    if (mathOperator != "") {

        // CHECKING IF DECIMAL IS CLICKED AND PREVENTING ITS DOUBLING

        if (num === ".") {
            if (!isDecimal) {
                secondValue += num;
                isDecimal = true;
            }
        }
        else secondValue += num;
        updateDisplay(secondValue);

    } else {

        // CHECKING IF DECIMAL IS CLICKED AND PREVENTING ITS DOUBLING - UNFORCH REPEATING THE SAME CODE... :( 

        if (num === ".") {
            if (!isDecimal) {
                firstValue += num;
                isDecimal = true;
            }
        }
        else firstValue += num;
        updateDisplay(firstValue);
    }
}

// SETTING DEL KEY THAT REMOVES LAST DIGIT FROM NUMBER

function numPressedDelete() {
    let delBuffer = "";
    if (mathOperator == "") {
        firstValue = firstValue.slice(0, -1);
        delBuffer = firstValue;
    }
    else {
        secondValue = secondValue.slice(0, -1);
        delBuffer = secondValue;
    }
    updateDisplay(delBuffer);
}

// CHECKING IF USER CLICKS MATH OPERATOR

function operationPressed(operator) {
    mathOperator = operator;
    updateDisplay(operator);
    isDecimal = false;
}

// SETTING LIVE DISPLAY FUNCTION

function updateDisplay(displayValue) {
    document.querySelector('.display').value = displayValue;
    subText.textContent = `${firstValue} ${mathOperator} ${secondValue} =`;
}

// MAKING CALCULATIONS DEPENDING ON CHOSEN OPERATOR

function numPressedResult() {

    // CHANGING STRINGS INTO NUMBERS SO MATH OPERATIONS CAN BE POSSIBLE
    
    firstValue = Number(firstValue);
    secondValue = Number(secondValue);

    // SOLVING DECIMAL PRECISION PROBLEM ADDING SOME MATH FUNCTIONS
    switch (mathOperator) {
        case "+":
            result = firstValue + secondValue;

            break;
        case "-":

            result = firstValue - secondValue;
            break;
        case "x":

            result = +(firstValue*secondValue).toFixed(9);
            break;
        case "/":
            result = +(firstValue / secondValue).toFixed(9);
            break;

        case "%":
            result = +(firstValue * (secondValue / 100)).toFixed(9);
            break;
            
        default:
            result = secondValue;

    }

    // RESETING VARIABLES

    updateDisplay(result);
    firstValue = "";
    secondValue = "";
    mathOperator = "";
    isDecimal = false;
    }

// RESETING VARIABLES IF 'C' IS CLICKED

function numPressedClear() {
    firstValue = "";
    secondValue = "";
    result = "";
    mathOperator = "";
    isDecimal = false;
    updateDisplay("0");
    subText.textContent = "0";
}

