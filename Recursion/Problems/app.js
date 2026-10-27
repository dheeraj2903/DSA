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


