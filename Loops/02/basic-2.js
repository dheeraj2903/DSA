// Sum of the given numbers While-loop

function sumNum() {

    let n = Number(prompt('Enter the number:'));

    let sum = 0;

    while(n > 0) {
        let rem = n % 10;
        
        sum = sum + rem;

        n = Math.floor(n / 10);

    }

    console.log(sum)
}


// Reverse a Number

function reverseNum() {
    let n = Number(prompt('Enter a number:'));

    let rev = 0;

    while(n>0){
        let rem = n%10

        rev = (rev * 10) + rem

        n = Math.floor(n/10)
    }

    console.log(rev)
}

// Fabonachi value
function fabonachi(){
     let n = 12;
     let first = 0 , second = 1;
     process.stdout.write(first+" " + second+" ")
     for(let i=1; i<=n-2; i++){
        let third = first + second;
        process.stdout.write(third+" ");
        first = second;
        second = third
     }
}
fabonachi()

// Automorphic Number

function autoMorphic() {
    
}