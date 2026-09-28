// Check Palindrome

function palindrome(str){

    let left = 0;
    let right = str.length - 1;

    while(left < right){

        if(str[left] != str[right]){
            return 'No'
        }
        left++;
        right--
    }

    return 'Yes'
}


//In line palindrome

function palindromeInLine(str){

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

function toggle(str){

    let ans = ''

    for(let i=0; i<str.length; i++){

        let ch = str.charCodeAt(i);

        if(ch>=65 && ch<90){
            ans = ans + String.fromCharCode(ch+32)
        }
        else if(ch>=97 && ch<=122){
            ans = ans + String.fromCharCode(ch-32)
        }
        else{
            ans = ans + str[i]
        }
    }

    return ans;
}

// Count with Given prefix

function prefix(){
    let words = ['attention', 'people', 'attrire', 'hello', 'attend']
    let s = 'at'
    let count = 0;

    for(let i=0; i<words.length; i++){
        if(words[i].startsWith(s)) count++
    }
    console.log(count);
    
}


// Change 1st & last alphabet of string of sentence

function capitalFirstAndLast(){
    let words = "Hai hello  bhai log"
    let arrStr = words.split(' ');
    let ans = ""

    for(let i=0; i<arrStr.length; i++){
        let word = arrStr[i];

        if(word.length<=2) ans=ans+word.toUpperCase();

        else{
            ans = ans + word.charAt(0).toUpperCase()
                  + word.substring(1, word.length - 1)
                  + word.charAt(word.length-1).toUpperCase() + " "
        }
    }

    console.log(ans);
    
}


//Frequency count of string

function frequency(){
    let prompt = require('prompt-sync')();
    let s = prompt('Enter a string:');
    let freqArr = new Array(123).fill(0);

    for(let i=0; i<s.length; i++){
        if(s[i] === " ") continue;
        let ascii = s.charCodeAt(i)
        freqArr[ascii] = freqArr[ascii] + 1;
    }

    for(let i=0; i<freqArr.length; i++){
        if(freqArr[i]>0){
            console.log(String.fromCharCode(i)+" --> " + freqArr[i]);
            
        }
    }
}
frequency()