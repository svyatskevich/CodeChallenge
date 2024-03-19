# Functional Programming: Return a Sorted Array Without Changing the Original Array
Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.
# Solution:
```javascript
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
let newArr = arr.slice(0, arr.length);
 return newArr.sort((a, b) => a - b);

  // Only change code above this line
}

nonMutatingSort(globalArray);
```