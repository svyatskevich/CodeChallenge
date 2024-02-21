# Debugging: Catch Use of Assignment Operator Instead of Equality Operator
Fix the condition so the program runs the right branch, and the appropriate value is assigned to result.
# Solution:
```javascript
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
```