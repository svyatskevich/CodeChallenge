# Regular Expressions: Positive and Negative Lookahead
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
# Solution:
```javascript
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
```