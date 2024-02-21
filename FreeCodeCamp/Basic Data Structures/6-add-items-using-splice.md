# Basic Data Structures: Add Items Using splice()
We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
# Solution:
```javascript
function htmlColorNames(arr) {
const startIndex = 0;
const amountToDelete = 2;
arr.splice(startIndex, amountToDelete, 'DarkSalmon', 'BlanchedAlmond');
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
```