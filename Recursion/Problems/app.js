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
