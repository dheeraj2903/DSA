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

prefix()