// Natural sum
function sum(n) {
  if (n == 1) return 1;

  return n + sum(n - 1);
}

// Factorial
function fact(n) {
  if (n == 1) return 1;

  return n * fact(n - 1);
}

// Fibonachi recursion
function fiboRecursion() {
  function fiboNTerms(n, first, second) {
    if (n == 0) return;
    let third = first + second;
    process.stdout.write(third + " ");
    fiboNTerms(n - 1, second, third);
  }

  let n = 11;
  let first = 0,
    second = 1;
  process.stdout.write(first + " " + second + " ");
  fiboNTerms(n - 2, first, second);
}

// Fibonachi sum
function fiboSum() {
  function fibo(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;

    return fibo(n - 1) + fibo(n - 2);
  }

  let n = 10;
  console.log(fibo(n));
}

// Sum of Digits by Recursion
function SOD() {
  function SOD(n) {
    if (n < 10) return n;
    return (n % 10) + SOD(Math.floor(n / 10));
  }

  let n = 561237;
  console.log(SOD(n));
}

// Reverse the number By Loop
function rev() {
  let n = 891;
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  console.log(rev);
}

// Reverse the digit by recursion
function reverseDigit() {
  function reverseDigit(n, rev) {
    if (n === 0) return rev;

    return reverseDigit(Math.floor(n / 10), rev * 10 + (n % 10));
  }

  let n = 198;
  console.log(reverseDigit(n, 0));
}


//Find common highest  factor of two numbers
function highFactor(){
  let a=126, b=54;
  
  for(let i=Math.min(a,b); i>=1; i--){
    if(a%i==0 && b%i==0){
      console.log(i);
      break;
    }
  }
}

//Euclideon by loop
function gcd(){
  let a = 16, b = 25;
   
  while(a != b){
    if(a>b) a = a-b;
    else b = b-a
  }
  console.log(a);
}

//Euclideon by recursion
function gcd(){
  function gcd(a, b){
    if(a==b) return a;
    if(a>b) return gcd(a-b, b)
      return gcd(a, b-a)
}

let a=16, b=25
console.log(gcd(a,b));

}


//
function gcd(a,b){
    if(b==0) return a;
    return gcd(b, a%b)
}
// console.log(gcd(16,24));

//Sieve of Eratosthenes algorithm
function checkPrime(){
  let prompt = require("prompt-sync")()
  let n = Number(prompt("Enter number:"));
  checkRangeInPrime(n)

  function checkRangeInPrime(n){
    let isPrime = new Array(n+1).fill(true);
    for(let i=2;i<=Math.floor(Math.sqrt(n)); i++){
      if(isPrime[i] == true){
        for(let j=i*i; j<=n; j+=i){
          isPrime[j]=false
        }
      }
    }
    
    for(let i=2; i<isPrime.length; i++){
      if(isPrime[i])process.stdout.write(i+" ")
    }
  }
}

//LeetCode Number 69
function mySqrt(){
  function mySqrt(n){
  let i=1;
  for(i; i*i<=n; i++){
    if(i*i==n) return i
  }
  return i-1
}
let n = 16
console.log(mySqrt(n));
}

//LeetCode Number 50

function myPow(){
  let x = 2
  let n = 10

  myPow(x,n)
  function myPow(x,n){
    if(n==0) return 1;
    return n<0? 1/temp(x,n) : temp(x,n)
  }

  function temp(x,n){
    if(n==0) return 1
    let ans = temp(x, parseInt(n/2))
    if(n%2 == 0) return ans*ans;
    return ans*ans*x
  }
}
console.log(myPow());
