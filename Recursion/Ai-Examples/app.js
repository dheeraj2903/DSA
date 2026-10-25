//5 se 1 tak print karo
function countDown(n) {
    if (n === 0) {
        return;
    }

    console.log(n);
    countDown(n - 1);
}

// 1 se N tak print karo

function printNumbers(n) {
    if (n === 0) {
        return;
    }

    printNumbers(n - 1);
    console.log(n);
}

//Factorial calculate karo

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

// console.log(factorial(5));

//Power calculate karo

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    return base * power(base, exponent - 1);
}

// console.log(power(2, 4));

function mystery(n) {
    if (n <= 0) return;

    console.log(n);    // A
    mystery(n - 2);   // B
    console.log(n);    // C
}



function solve(n) {
    if (n <= 0) return;

    console.log(n);
    solve(n - 1);
    console.log(n + 1);
}
