# Regular Expressions: Match Ending String Patterns
Use the anchor character ($) to match the string caboose at the end of the string caboose.
# Solution:
```javascript
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
```