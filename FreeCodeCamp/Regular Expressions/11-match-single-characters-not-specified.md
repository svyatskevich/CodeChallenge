# Regular Expressions: Match Single Characters Not Specified
Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
# Solution:
```javascript
let quoteSample = "3 blind mice.";
let myRegex = /[^3ie]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```