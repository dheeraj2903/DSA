// Find minimum element

function minNum() {
    let arr = [10, 12, 34, 50 , 80, 85];

let min = arr[0];

for(let i=0; i<=arr.length; i++){
    if(arr[i]<min){
        min=arr[i]
    }
}

console.log(min)
}


function reverse() {

    let arr = [11,22,33,55,44,66,88,77,99,100];

    let start = 0;
    let end = arr.length - 1;

    while( start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end]=temp

        start++
        end--
    }

    console.log(arr)
}
reverse()