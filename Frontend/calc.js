// SETTING VARIABLES
let bufferedNumber = null;
let currentNumber = null;
let operatorFlag = null;
let action = null;
let precision = 9;
resetVars();

// CHECKING WHETHER USER IS TYPING FIRST OR SECOND NUMBER
function buttonPressed(button) {
    switch(button) {
        case ("+"):
            setAction(add);
            break;
        case ("-"):
            setAction(subtract);
            break;
        case ("*"):
            setAction(multiply);
            break;
        case ("/"):
            setAction(divide);
            break;
        case ("."):
            appendComma();
            break;
        case ("d"):
            if (operatorFlag) {
                currentNumber = "" + bufferedNumber;
                action = null;
                operatorFlag = false;
            }
            currentNumber = currentNumber.slice(0, -1);
            updateDisplay(currentNumber);
            break;
        case ("c"):
            resetVars();
            break;
        case ("%"):
            if (operatorFlag) {
                currentNumber = bufferedNumber;
                operatorFlag = false;
            }
            currentNumber = "" + (currentNumber/100);
            updateDisplay(currentNumber);
            break;
        case ("="):
            bufferedNumber = action(bufferedNumber, currentNumber);
            operatorFlag = true;
            updateDisplay(bufferedNumber);
            break;
        default:
            numberPressed(button);
            break;
	}
}

function setAction(act) {
    if (!operatorFlag) {
        bufferedNumber = currentNumber;
    }
    
    action = act;
    operatorFlag = true;
}

function numberPressed(char) {
    if (operatorFlag) {
        currentNumber = "";
        operatorFlag = false;
    }
    currentNumber = ensureNumberPrecision(currentNumber + char);    
    updateDisplay(currentNumber);
}

function appendComma() {
    if (currentNumber.indexOf(".") == -1) {
        currentNumber += ".";
    }
}

function add(var1, var2) {
    return Number(var1) + Number(var2);
}

function subtract(var1, var2) {
    return var1 - var2;
}

function multiply(var1, var2) {
    return var1 * var2;
}

function divide(var1, var2) {
    return var1 / var2;
}

function resetVars() {
    bufferedNumber = null;
    currentNumber = "";
    action = null;
    operatorFlag = false;
    updateDisplay(currentNumber);
}

function updateDisplay(value) {
    document.getElementById("display").value = ensureNumberPrecision(value);
}

function ensureNumberPrecision(number) {
    return "" + Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
}