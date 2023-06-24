/*Challenge # 1 — Counting duplicate characters

A very common programming interview question is that given a string you need to find out the duplicate characters in the string.

Input: “adsjfdsfsfjsdjfhacabcsbajda”

Output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 } */

function CountingDuplicate() {
  var seqChar = "adsjfdsfsfjsdjfhacabcsbajda";
  var duplicateElemCount = {};
  for (var i = 0; i < seqChar.length; i++) {
    if (seqChar[i] in duplicateElemCount) {
      duplicateElemCount[seqChar[i]]++;
    } else {
      duplicateElemCount[seqChar[i]] = 1;
    }
  }
  return duplicateElemCount;
}
var result = CountingDuplicate();
console.log(result);
