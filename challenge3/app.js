/*First Reverse
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
Examples
Input: "coderbyte"
Output: etybredoc
Input: "I Love Code"
Output: edoC evoL I  

*/
function readline() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Please enter your name: ", (userInput) => {
    console.log(userInput);
    rl.close();
  });
}
function firstReverse(char) {
  let start = 0;
  let end = char.length;
  let newArr = char.split();
  while (start < end) {
    var temp = newArr[start];
    newArr[start] = newArr[end];
    newArr[end] = temp;
    start++;
    end--;
  }
  return newArr.join("");
}

console.log(firstReverse(readline()));
