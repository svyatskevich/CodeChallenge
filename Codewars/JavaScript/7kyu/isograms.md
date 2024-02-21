# NOTE:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

# Example: (Input --> Output)
"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

```javascript
isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
```
# Solution:
```javascript
function isIsogram(str) {
let string = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
   if (string == null) {
     return true;
   } else {
     return false;
 }
}
```

