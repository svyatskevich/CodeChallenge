# Regular Expressions: Match Non-Whitespace Characters
Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.
# Solution:
```javascript
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```