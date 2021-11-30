// Put your code here
console.log("let's roll some dice, baby");
console.log("---------------------------");
const dieStringArray = ["zero", "one", "two", "three", "four", "five", "six"];

function roll(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log("a random number ", roll());

for (let i = 0; i < 10; i++) {
  die1 = roll(1, 6);
  die2 = roll(1, 6);
 

  let message = `${dieStringArray[die1]} + ${dieStringArray[die2]} = ${die1 + die2} `;
  if (die1 === die2) {
    message += "doubles";
  }
  console.log(message);
}
