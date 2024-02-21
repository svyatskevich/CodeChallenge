# NOTE:
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

# Examples:
```javascript
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
```
# Solution:
```javascript
function getMiddle(s) {
return s.substr((s.length - 1) / 2, 2 - s.length % 2);
}

console.log(getMiddle("test")); 
console.log(getMiddle("testing")); 
console.log(getMiddle("middle")); 
console.log(getMiddle("A"));
```
