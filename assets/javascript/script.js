// Botões
const btnGenerate = document.getElementById("btnGenerate");
const btnCopy = document.getElementById("btnCopy");

//Inputs
const passLength = document.getElementById("passLenght");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const result = document.getElementById("result");


//Funções
function getRandomLower() {
    const Lower = "abcdefghijlmnopqrstuvwxyz";
    return Lower[Math.floor(Math.random() * Lower.length)];
};

function getRandomUpperCase() {
    const Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return Upper[Math.floor(Math.random() * Upper.length)];
};

function getRandomNumber() {
    const Number = "0123456789";
    return Number[Math.floor(Math.random() * Number.length)];
};

function getRandomSymbol() {
    const symbols = "!@#$%^&*()[]{}=<>/,."
    return symbols[Math.floor(Math.random() * symbols.length)];
};
const random = {
    upper: getRandomUpperCase,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

btnGenerate.addEventListener("click", () => {
    const lenght = +passLength.value;
    const haslower = lowerCase.checked;
    const hasUpper = upperCase.checked;
    const hasNumber = number.checked;
    const hasSymbol = symbol.checked;

    result.value = generatePasswd(
        haslower,
        hasUpper,
        hasNumber,
        hasSymbol,
        lenght
    );
});

function generatePasswd(lower, upper, number, symbol, lenght) {
    let gPasswd = "";
    let typesCount = lower + upper + number + symbol;

    const typesArr = [{
        lower
    }, {
        upper
    }, {
        number
    }, {
        symbol
    }].filter((item) => {
        return Object.values(item)[0];
    });
    for (let i = 0; i < lenght; i++) {
        typesArr.forEach((type) => {
            const funcName = Object.keys(type)[0];
            gPasswd += random[funcName]();
        });
    }
    const finalyPasswd = gPasswd.slice(0, lenght);
    return finalyPasswd;
};

btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(result.value);
    alert("texto copiado " + result.value);
});