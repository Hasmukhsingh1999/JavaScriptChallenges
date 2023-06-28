function removeSpaces(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") continue;
        else {
            newStr += str[i];
        }
    }
    return newStr
}

var str = "aa aa"  ;
console.log(removeSpaces(str));
