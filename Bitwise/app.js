//Swap integer without extra variable

function swapBitwise(){
  let a = 50 , b = 100;

  a = a^b;
  b = a^b;
  a = a^b
  console.log("a:",a, "b:",b);
  
}

// Check Number is even or odd

function checkEvenOdd(){
  let prompt = require('prompt-sync')();
  let n = Number(prompt('Enter a number:'))

  console.log((n&1) === 0? "Even" : 'Odd');
  
}
 