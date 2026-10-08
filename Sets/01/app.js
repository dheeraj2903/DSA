//Check the number is haapy number or not

function happyNum() {
  let prompt = require("prompt-sync")();
  let n = Number(prompt("Enter the number: "));
  let set = new Set();

  while (true) {
    let sum = 0;
    while (n > 0) {
      let rem = n % 10;
      sum = sum + rem * rem;
      n = Math.floor(n / 10);
    }

    if (sum == 1) {
      console.log("Happy Number ");
      return;
    }
    if (set.has(sum)) {
      console.log("Not a happy number");
      return;
    } else set.add(sum);

    n = sum;
  }
}

//Check frequency throungh Map & Set

function mapFreqCheck() {
  let arr = [1, 10, 2, 5, 2, 3, 2, 5, 10, 21, 21, 3, 3, 5, 10];

  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i])+1);
    } else map.set(arr[i], 1);
  }

  console.log(map);
}


///Check String through Map & set

function strFreq(){
    let s = "malayalam"

    let map = new Map();

    for(let i=0; i<s.length; i++){
        let ch = s.charAt(i)

        if(map.has(ch)){
            map.set(ch, map.get(ch) + 1)
        }else map.set(ch, 1)
    }
    console.log(map);
    
}

