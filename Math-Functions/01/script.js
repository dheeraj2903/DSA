/* Calculate area of triangle by heron's formula */


let a = Number(prompt("Enter first number:"))
let b = Number(prompt("Enter second number:"))
let c = Number(prompt("Enter third number:"))

if(a+b<=c || b+c<= a || a+c<= b) {
    console.log('Not possible')
} else {
    let s = (a+b+c)/2;
    console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
}