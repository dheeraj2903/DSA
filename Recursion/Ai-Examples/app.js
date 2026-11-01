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

//Count Digits Using Recursion
function countDigits(n) {
    if (n < 10) return 1;

    return 1 + countDigits(Math.floor(n / 10));
}

//Sum of Digits
function sumDigits(n) {
    if (n === 0) return 0;

    return (n % 10) + sumDigits(Math.floor(n / 10));
}


//Check Whether Array Is Sorted
function isSorted(arr, index = 0) {
    if (index === arr.length - 1) return true;

    if (arr[index] > arr[index + 1]) {
        return false;
    }

    return isSorted(arr, index + 1);
}


//Find First Occurrence in Array
function firstOccurrence(arr, target, index = 0) {
    if (index === arr.length) return -1;

    if (arr[index] === target) return index;

    return firstOccurrence(arr, target, index + 1);
}


//Generate All Binary Strings
function binaryStrings(n, current = "") {
    if (current.length === n) {
        console.log(current);
        return;
    }

    binaryStrings(n, current + "0");

    binaryStrings(n, current + "1");
}
