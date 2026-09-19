//Binary Search Algorithm


function binarySearch() {

    let arr = [10, 23, 39, 47, 57, 68, 74, 89, 101, 125]

    if(search(arr, 55) === -1) console.log('Element not Found');
    else console.log("Element found");
    
    function search(arr, target){
        let start = 0, end = arr.length - 1;

        while(start<=end){
            let mid = Math.floor(start + (end - start)/2);
            
            if(arr[mid] === target) return mid;
            else if(arr[mid] > target) end = mid - 1;
            else start = mid + 1;
        }
        return -1
    }
}


//Bubble Sort

function bubbleSort(){

    let arr = [1, 3, 4, 2, 9, 10];

    let n = arr.length;

    for(let i = 0; i<n-1; i++){
        for(let j=0; j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    console.log(arr);
    
}


// Selection Sort Algorithm

function selectionSort(){
    
    let arr=[100, 3, 5, 1, 14];

    for(let i=0; i<arr.length-1; i++){

        let small = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[small] > arr[j]){
                small=j
            }
        }

        if(i != small){
            let temp = arr[i];
            arr[i] = arr[small];
            arr[small] = temp;
        }
    }
    console.log(arr);
    
}


// Insertion sort

function insertionSort(){
    let arr=[3, 2, 5,9, 7, 11]
    
    for(let i=1; i<arr.length; i++){
        
        let key = arr[i];
        let j = i - 1;

        while(j>=0 && arr[i]>key){
            arr[j+1] = arr[j]
            j--
        }

        arr[j+1] = key;
    }
    console.log(arr);
    
}

insertionSort()