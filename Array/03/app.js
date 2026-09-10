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

secondLarNum()





// Swap the Number two point algo

function swapFun() {

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


