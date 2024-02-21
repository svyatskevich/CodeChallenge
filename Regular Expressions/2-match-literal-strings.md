# Regular Expressions: Match Literal Strings
Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.
# Solution:
```javascript
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```