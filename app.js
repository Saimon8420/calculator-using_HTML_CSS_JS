let inputValue = document.getElementById("inputValue");
let disFirstInput = document.getElementById("disFirstInput");
let disOperationInput = document.getElementById("disOperationInput");

let symbol = null;

let firstValue = null;
let secondValue = null;


let time = document.getElementById("displayTime");
const setTime = () => {
    setInterval(() => {
        time.innerHTML = `<i class="fa-regular fa-clock fa-spin"></i> ${new Date().toLocaleTimeString()}`
    }, 1000);
}

setTime();

const removeInputChr = () => {
    inputValue.innerText = inputValue.innerText.slice(0, - 1);
    disFirstInput.innerText = `Current Value: ${inputValue.innerText}`;
    firstValue = parseFloat(inputValue.innerText);
}

const setInputValue = (value) => {
    inputValue.innerText = inputValue.innerText + value;
    if (symbol !== null && symbol === "%") {
        secondValue = inputValue.innerText.split("%")[1];
    }
    else if (symbol !== null) {
        secondValue = parseFloat(inputValue.innerText);
    }
    else {
        firstValue = parseFloat(inputValue.innerText);
        disFirstInput.innerText = `Current Value: ${firstValue}`;
    }
}

const setSymbol = (curSymbol) => {
    if (curSymbol === "%") {
        inputValue.innerText = firstValue + '%';
        symbol = curSymbol;
        disOperationInput.innerText = `Operation: ${curSymbol}`;
    }
    else {
        firstValue = parseFloat(inputValue.innerText);
        inputValue.innerText = null;
        symbol = curSymbol;
        disOperationInput.innerText = `Operation: ${curSymbol}`;
    }
}

const sum = () => {
    if (symbol === "+") {
        inputValue.innerText = parseFloat(firstValue + secondValue);
        firstValue = parseFloat(inputValue.innerText);
        disFirstInput.innerText = `Current Value: ${firstValue}`;
        symbol = null;
        disOperationInput.innerText = `Operation:`;
    }
    else if (symbol === "-") {
        inputValue.innerText = parseFloat(firstValue - secondValue);
        firstValue = parseFloat(inputValue.innerText);
        disFirstInput.innerText = `Current Value: ${firstValue}`;
        symbol = null;
        disOperationInput.innerText = `Operation:`;
    }
    else if (symbol === "*") {
        inputValue.innerText = parseFloat(firstValue * secondValue);
        firstValue = parseFloat(inputValue.innerText);
        disFirstInput.innerText = `Current Value: ${firstValue}`;
        symbol = null;
        disOperationInput.innerText = `Operation:`;
    }
    else if (symbol === "/") {
        inputValue.innerText = parseFloat(firstValue / secondValue);
        firstValue = parseFloat(inputValue.innerText);
        disFirstInput.innerText = `Current Value: ${firstValue}`;
        symbol = null;
        disOperationInput.innerText = `Operation:`;
    }
    else if (symbol === "%") {
        if (secondValue !== null) {
            inputValue.innerText = parseFloat((firstValue * secondValue) / 100);
            disFirstInput.innerText = `Current Value: ${inputValue.innerText}`
            firstValue = parseFloat(inputValue.innerText);
            symbol = null;
            disOperationInput.innerText = `Operation:`;
        }
        else {
            inputValue.innerText = parseFloat(firstValue / 100);
            disFirstInput.innerText = `Current Value: ${inputValue.innerText}`;
            firstValue = parseFloat(inputValue.innerText);
            symbol = null;
            disOperationInput.innerText = `Operation:`;
        }
    }
}
const clearVal = () => {
    inputValue.innerText = null;
    firstValue = null;
    secondValue = null;
    symbol = null;
    disFirstInput.innerText = `First Input:`;
    disOperationInput.innerText = `Operation:`;
}