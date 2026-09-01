let year = Number(prompt("Enter a year:"));

let isLeap = false;

if((year%4==0 && year%100 != 0)){
    console.log("Leap year")
}else if(year % 400 == 0){
    console.log("Leap Year")
}else console.log('no leap year')