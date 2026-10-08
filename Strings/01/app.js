// Check Palindrome

function palindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] != str[right]) {
      return "No";
    }
    left++;
    right--;
  }

  return "Yes";
}

//In line palindrome

function palindromeInLine(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // non-alphanumeric ko skip karo
    while (left < right && !/[a-zA-Z0-9]/.test(str[left])) {
      left++;
    }

    while (left < right && !/[a-zA-Z0-9]/.test(str[right])) {
      right--;
    }

    if (str[left] !== str[right].toLowerCase()) {
      return "No";
    }

    left++;
    right--;
  }

  return "Yes";
}

//Alphabet Toggle

function toggle(str) {
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str.charCodeAt(i);

    if (ch >= 65 && ch < 90) {
      ans = ans + String.fromCharCode(ch + 32);
    } else if (ch >= 97 && ch <= 122) {
      ans = ans + String.fromCharCode(ch - 32);
    } else {
      ans = ans + str[i];
    }
  }

  return ans;
}

// Count with Given prefix

function prefix() {
  let words = ["attention", "people", "attrire", "hello", "attend"];
  let s = "at";
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(s)) count++;
  }
  console.log(count);
}

// Change 1st & last alphabet of string of sentence

function capitalFirstAndLast() {
  let words = "Hai hello  bhai log";
  let arrStr = words.split(" ");
  let ans = "";

  for (let i = 0; i < arrStr.length; i++) {
    let word = arrStr[i];

    if (word.length <= 2) ans = ans + word.toUpperCase();
    else {
      ans =
        ans +
        word.charAt(0).toUpperCase() +
        word.substring(1, word.length - 1) +
        word.charAt(word.length - 1).toUpperCase() +
        " ";
    }
  }

  console.log(ans);
}

//Frequency count of string

function frequency() {
  let prompt = require("prompt-sync")();
  let s = prompt("Enter a string:");
  let freqArr = new Array(123).fill(0);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") continue;
    let ascii = s.charCodeAt(i);
    freqArr[ascii] = freqArr[ascii] + 1;
  }

  for (let i = 0; i < freqArr.length; i++) {
    if (freqArr[i] > 0) {
      console.log(String.fromCharCode(i) + " --> " + freqArr[i]);
    }
  }
}

//check the 2 strings are anagram or not

function anagram() {
  let prompt = require("prompt-sync")();
  let string1 = prompt("Enter string one: ");
  let string2 = prompt("Enter string two: ");
  let freqArr = new Array(123).fill(0);

  if (string1.length != string2.length) {
    console.log("Given stringd are not anagram");
  } else {
    let isAnagram = true;

    for (let i = 0; i < string1.length; i++) {
      let ascii = string1.charCodeAt(i);

      freqArr[ascii] = freqArr[ascii] + 1;
    }

    for (let i = 0; i < string2.length; i++) {
      let ascii = string2.charCodeAt(i);

      freqArr[ascii] = freqArr[ascii] - 1;
    }

    for (let i = 0; i < freqArr.length; i++) {
      if (freqArr[i] != 0) {
        isAnagram = false;
        break;
      }
    }

    if (isAnagram) console.log("Given string is anagram");
    else console.log("Given string is not a anagram");
  }
}

//check sentence is pangram - means every alphabet comes atleast once

function pangram() {
  let prompt = require("prompt-sync")();
  let sentence = prompt("Enter senytence: ");

  let set = new Set();
  for (let i = 0; i < sentence.length; i++) {
    let ch = sentence.charAt(i);
    set.add(ch);
  }

  // return set.size === 26
  if (set.size === 26) console.log("Sentence is pangram");
  else console.log("Sentence is not a pangram");
}


// Check 1st character which reapeat 2 times

function firstCharRepeat(){
  let s= "abdcnsnn"
  let map = new Map()

  for(let i=0; s.length; i++){
    let ch = s.charAt(i);
    if(map.has(ch)){
      map.set(ch, map.get(ch) + 1)
      if(map.get(ch) == 2) return console.log('Character:',ch);
      
    }else map.set(ch, 1)
  }
  // console.log("Character: ", ch);
  
}

// Sort the people Leet-2418

function sortPeople(){
  let names = ["Mary","John","Emma"];
  let heights = [180,165,170]

  let map = new Map();

  for(let i=0; i<names.length; i++){
    map.set(heights[i], names[i])
  }

  heights.sort((a,b) => b-a);

  let ans = new Array(names.length)

  for(let i=0; i<heights.length; i++){
    ans[i] = map.get(heights[i])
  }

  return console.log('Sorted people:', ans); 
}
sortPeople()