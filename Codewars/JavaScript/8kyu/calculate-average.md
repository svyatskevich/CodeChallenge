# NOTES:
Write a function which calculates the average of the numbers in a given list.
- Empty arrays should return 0.
# Solution:
```javascript
function findAverage(array) {
  if(array.length === 0) {
   return 0;
}
  let sum = array.reduce((total, value) => total + value, 0);
  let average = sum / array.length;
  return average;
}
```