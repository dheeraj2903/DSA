// Add even and odd number
function evenOddSum() {
  let n = Number(prompt("Enter a number:"));
  let evenSum = 0,
    oddSum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      evenSum = evenSum + i;
    } else {
      oddSum = oddSum + i;
    }
  }

  console.log("Even sum :", evenSum);
  console.log("Odd sum :", oddSum);
}

// Factor of n number Approach 1
function factorFun1(){
   let n = Number(prompt('Enter a number:'))

   for(i = 1; i<=n; i++){
    if(n % i == 0) console.log(i)
   }
}

// Factor of n number Approach 2
function factorFun2(){
    let n = Number(prompt('Enter a number:'));

    for(i=1; i<=n/2; i++){
        if(n % i == 0) {
            console.log(i)
        }
    }
    console.log(n)
}

// Prime number Approach 1
function primeNum() {
    let n = Number(prompt('Enter a number:'));

    let isPrime = true;

    for(let i=2; i<n; i++){
        if(n % i == 0) {
            isPrime = false;
            break;
        }
        
    }
    if(isPrime) console.log('Prime number');
    else console.log('No Prime number')
}

// Prime number Approach 2 reduced iterations in half
function primeNum2() {
    let n = Number(prompt('Enter a number:'));
    let isPrime = true;

    for(let i = 2; i<n/2; i++){
        if(n % i == 0 ) {
            isPrime = false;
            break;
        }
    }

    if(isPrime) console.log('Prime Number')
        else console.log('Not a prime number')
}

// Prime number Approach 3 Best one
function primeNum3() {
    let n = Number(prompt('Enter a number:'));

    let isPrime = isPrimeFun(n);
    if(isPrime) console.log('Prime Number');
    else console.log('No prime number');

    function isPrimeFun(n) {
        if(n<=1) return false;
        if(n==2) return true;
        if(n % 2 == 0) return false;
        for(let i=3; i<= Math.floor(Math.sqrt(n)); i += 2){
            if( n % i == 0) return false;
        }

        return true
    }
}