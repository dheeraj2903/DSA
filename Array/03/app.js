// Second Largest Number

function secondLarNum() {

    let arr= [10, 12, 51,42, 20,59, 75, 80, 80];
    let Max = Math.max(arr[0], arr[1])
    let sMax = Math.min(arr[0], arr[1])

    for(let i=2; i<arr.length; i++){
        if(arr[i]>Max){
            sMax = Max;
            Max = arr[i]
        }else if( arr[i] > sMax && arr[i] != Max) {
            sMax = arr[i]
        }
    }
    console.log('Second Largest:', sMax);
}



// All zeros to left all 1 to right two point algo

function shiftZeroAndOne() {

    let arr = [ 0,0,1,1,0,1,0,0,1,0]

    let i = 0 , j=0;

    while(i<arr.length){
        if(arr[i] == 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++
        }
        i++
    }
    console.log(arr)
}


// Reverse the number by swap

function reverseNum() {
    let arr = [11,2,3,4,5,6];

let i = 0 , j = arr.length-1;

while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--
}
console.log(arr)
}
reverseNum()