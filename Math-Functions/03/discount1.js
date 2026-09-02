function disc1() {
  let amount = Number(prompt("Enter a amount:"));

  if (amount >= 0 && amount <= 5000) console.log(amount);
  else if (amount > 5000 && amount <= 7000)
    console.log(amount - (5 * amount) / 100);
  else if (amount > 7000 && amount <= 9000)
    console.log(amount - (10 * amount) / 100);
  else if (amount > 9000) console.log(amount - (20 * amount) / 100);
  else console.log("Invalid input");
}

function disc2() {
  let amount = Number(prompt("Enter a amount:"));
   let dis = 0
  if (amount >= 0 && amount <= 5000) dis = 0
  else if (amount > 5000 && amount <= 7000) dis = 5
  else if (amount > 7000 && amount <= 9000) dis = 10
  else if (amount > 9000) dis = 20
  else console.log("Invalid input");

  console.log(amount - (dis*amount/100))
}
