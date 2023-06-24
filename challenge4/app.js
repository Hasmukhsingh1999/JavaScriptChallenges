/**Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"  */

function LongestWord(sen) {
  // code goes here
  var removeSpecialWord = sen.replace(/[^\w\s]|_/g, "");
  var words = removeSpecialWord.split(" ");
  var longesrWordLength = words[0];
  for (let i = 1; i < words.length; i++) {
    const currentWordLenght = words[i];
    if (currentWordLenght.length > longesrWordLength.length) {
      longesrWordLength = currentWordLenght;
    }
  }
  return longesrWordLength;
}

// keep this function call here
console.log(LongestWord(readline()));
