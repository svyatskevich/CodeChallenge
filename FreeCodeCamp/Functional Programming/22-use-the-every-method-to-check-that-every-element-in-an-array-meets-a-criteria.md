# Functional Programming: Use the every Method to Check that Every Element in an Array Meets a Criteria
Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.
# Solution:
```javascript
function checkPositive(arr) {
  // Only change code below this line
  
return arr.every(function(value) {
    return value > 0;
  });
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
```