// Transpose matrix by normal waa\y
function trnasposeMat() {
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  let row = arr.length;
  let col = arr[0].length;
  let ans = new Array(col);

  for (let i = 0; i < ans.length; i++) {
    ans[i] = new Array(row);
  }

  for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < ans[i].length; j++) {
      ans[i][j] = arr[j][i];
    }
  }
  return ans;
}

// Rotate Image with transpose LeetCode

function rotateImage() {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let k = 0,
      j = matrix[i].length - 1;

    while (k < j) {
      let temp = matrix[i][k];
      matrix[i][k] = matrix[i][j];
      matrix[i][j] = temp;

      k++;
      j--;
    }
  }

  console.log(matrix);
}

// Spiral Matrix

function spiralMat() {
  let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];

  let minC = 0;
  let maxC = matrix[0].length - 1;

  let minR = 0;
  let maxR = matrix.length - 1;

  let ans = [];
  let totalEle = matrix.length * matrix[0].length;

  while (ans.length < totalEle) {
    //First Wall -> Left to Right
    for (let C = minC; C <= maxC && ans.length < totalEle; C++) {
      ans.push(matrix[minR][C]);
    }
    minR++;

    // Right Column -> Top to Bottom
    for (let R = minR; R <= maxR && ans.length < totalEle; R++) {
      ans.push(matrix[R][maxC]);
    }
    maxC--;

    // Lowest wall => Right to Left
    for (let C = maxC; C >= minC && ans.length < totalEle; C--) {
      ans.push(matrix[maxR][C]);
    }
    maxR--;

    // Left Column -> Bottom to top
    for (let R = maxR; R >= minR && ans.length < totalEle; R--) {
      ans.push(matrix[R][minC]);
    }
    minC++;
  }
  //  return ans
  console.log(ans);
}

// Image reverse and Invert then

function invertImage() {
  let image = [
    [0, 0, 1],
    [1, 0, 1],
    [0, 1, 1],
  ];

  for(let i=0; i<image.length; i++){

    let left = 0;
    let right = image[i].length - 1;

    while(left<right){
      let temp = image[i][left];
      image[i][left] = image[i][right];
      image[i][right] = temp;

      left++;
      right--
    }

    for(let j=0; j<image[i].length; j++){
      if(image[i][j]===0){
        image[i][j] = 1;
      }else{
        image[i][j] = 0
      }
    }
  }

  console.log(image);
  
}