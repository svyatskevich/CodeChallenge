# Regular Expressions: Specify Exact Number of Matches
Change the regex timRegex to match the word Timber only when it has four letter m's.

# Solution:
```javascript
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```