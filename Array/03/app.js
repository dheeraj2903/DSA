//2D Array

function twoD() {
  let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(` ${arr[i][j]}`);
    }
    console.log();
  }
}

// 2D Array Dynamic Entry

function dynamic2D() {
  let prompt = require("prompt-sync")();
  let size = Number(prompt("Enter outer array Size:"));
  let arr = new Array(size);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(4);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Number(prompt("Enter the array elements"));
    }
  }
  console.log(arr);
}

function dynamic2DArr() {
  let prompt = require("prompt-sync")();
  let size = Number(prompt("Enter outer array Size:"));
  let arr = new Array(size);

  for (let i = 0; i < arr.length; i++) {
    let innerArrSize = Number(prompt("Enter inner array size:"));
    arr[i] = new Array(innerArrSize);

    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Number(prompt("Enter the array elements"));
    }
  }

  console.log(arr);
}

// 3D Array

function dynamic3D() {
  let arr = [
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    [
      [7, 8, 9],
      [10, 11, 12],
    ],
    [
      [13, 14, 15],
      [16, 17, 18],
    ],
  ];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        process.stdout.write(` ${arr[i][j][k]}`);
      }
      console.log();
    }
  }
}

// 2D Diagonal sum

function diagonalSum() {
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let leftSum = 0,
    rightSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i == j) leftSum += arr[i][j];
      if (i + j == arr.length - 1) rightSum += arr[i][j];
    }
  }
  console.log("Left sum:", leftSum);
  console.log("LefRight sum:", rightSum);
  console.log("Both sum:", leftSum + rightSum);
}

//Diagonal repeat element handled

function diagonalLeftRightSum() {
  let arr = [
    [1, 2, 3],
    [4, 10, 6],
    [7, 8, 9],
  ];

  let leftSum = 0,
    rightSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i == j) leftSum += arr[i][j];
      if (i + j == arr.length - 1) rightSum += arr[i][j];
    }
  }

  if (arr.length % 2 == 1) {
    let mid = Math.floor(arr.length / 2);

    return leftSum + rightSum - arr[mid][mid];
  }

  return leftSum + rightSum;
}

// Transpose matrix by method
function trnasposeMatrix() {
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  let ans = Array.from({ length: arr[0].length }, () => Array(arr.length));

  for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < ans[i].length; j++) {
      ans[i][j] = arr[j][i];
    }
  }

  return ans;
}
