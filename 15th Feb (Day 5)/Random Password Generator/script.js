//DOM elements 
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');



const randomFunc = {
    lower : getRandomLower,
    upper : getRandomUpper,
    number : getRandomNumber,
    symbol : getRandomSymbol
};


generateEl.addEventListener('click', () => {
    const length = lengthEl.value;
    console.log(length);
})

//Generator functions 

function getRandomLower(){
   //for lower case characterset starts from 97 to 122   
 return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

function getRandomUpper(){
    //for lower case characterset starts from 97 to 122   
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }

 function getRandomNumber(){
    //for lower case characterset starts from 97 to 122   
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }

 function getRandomSymbol(){
     const symbols = '!@#$%^&*(){}=<>/,.';
     return symbols[Math.floor(Math.random()* symbols.length)]
 }