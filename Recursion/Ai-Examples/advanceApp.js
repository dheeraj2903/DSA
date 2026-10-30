// Advance Questions

//Sum of Array Elements
function arraySum(arr, index = 0) {
    if (index === arr.length) return 0;

    return arr[index] + arraySum(arr, index + 1);
}

//Reverse a String
function reverseString(str) {
    if (str.length === 0) return "";

    return reverseString(str.slice(1)) + str[0];
}

// console.log(reverseString("hello"));

//Check Palindrome
function isPalindrome(str, left = 0, right = str.length - 1) {
    if (left >= right) return true;

    if (str[left] !== str[right]) return false;

    return isPalindrome(str, left + 1, right - 1);
}


//Calculate Power (a^b)
function power(a, b) {
    if (b === 0) return 1;

    return a * power(a, b - 1);
}

//Find Maximum Element in Array
function findMax(arr, index = 0) {
    if (index === arr.length - 1) return arr[index];

    let max = findMax(arr, index + 1);

    return Math.max(arr[index], max);
}

//Binary Search Using Recursion
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    }

    return binarySearch(arr, target, mid + 1, right);
}

//Generate All Subsequences of a String
function subsequences(str, index = 0, current = "") {
    if (index === str.length) {
        console.log(current);
        return;
    }

    // Exclude current character
    subsequences(str, index + 1, current);

    // Include current character
    subsequences(str, index + 1, current + str[index]);
}

//Tower of Hanoi
function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }

    towerOfHanoi(n - 1, source, destination, auxiliary);

    console.log(`Move disk ${n} from ${source} to ${destination}`);

    towerOfHanoi(n - 1, auxiliary, source, destination);
}


//Generate All Permutations of a String
function permutations(str, current = "") {
    if (str.length === 0) {
        console.log(current);
        return;
    }

    for (let i = 0; i < str.length; i++) {
        let remaining = str.slice(0, i) + str.slice(i + 1);

        permutations(remaining, current + str[i]);
    }
}

//Combination Sum
function combinationSum(candidates, target) {
    let result = [];

    function solve(index, current, sum) {
        if (sum === target) {
            result.push([...current]);
            return;
        }

        if (index === candidates.length || sum > target) {
            return;
        }

        // Include current element
        current.push(candidates[index]);

        solve(index, current, sum + candidates[index]);

        current.pop();

        // Exclude current element
        solve(index + 1, current, sum);
    }

    solve(0, [], 0);

    return result;
}

