# Regular Expressions: Match Characters that Occur One or More Times
You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.

# Solution:
```javascript
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);
console.log(result);
```