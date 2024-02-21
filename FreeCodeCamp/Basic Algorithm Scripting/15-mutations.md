# Basic Algorithm Scripting: Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
# Solution:
```javascript
function mutation(arr) {
  let string1 = arr[0].toLowerCase();
  let string2 = arr[1].toLowerCase();
  let count = 0;

  for (let i in string2) {
    if (string1.indexOf(string2[i]) !== -1) {
      count ++;
    } 
  }
     return count === string2.length;
}
```

