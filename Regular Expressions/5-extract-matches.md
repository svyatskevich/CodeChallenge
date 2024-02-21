# Regular Expressions: Extract Matches
Apply the .match() method to extract the string coding.
# Solution:
```javascript
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
```