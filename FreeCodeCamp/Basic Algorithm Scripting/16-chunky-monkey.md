# Basic Algorithm Scripting: Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
# Solution:
```javascript
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
```