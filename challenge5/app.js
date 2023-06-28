function removeSpaces(str) {
  var newStr = "";
  var spaceFound = 1;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      spaceFound = 1;
    } else {
      if (spaceFound) {
        newStr += str[i];
        spaceFound = 0;
      } else {
        newStr += str[i];
      }
    }
  }
  return newStr;
}

var str = "aa aaa";
console.log(removeSpaces(str));
