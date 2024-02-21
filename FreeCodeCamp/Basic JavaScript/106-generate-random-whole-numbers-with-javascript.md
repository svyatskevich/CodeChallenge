# Basic JavaScript: Generate Random Whole Numbers with JavaScript
Use this technique to generate and return a random whole number in the range from 0 to 9.
# Solution:
```javascript
function randomWholeNum() {
  let random = Math.random() * 10; 
  let randomWholeNum =  Math.floor(random);
  return randomWholeNum;
}
```
