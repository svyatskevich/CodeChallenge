# 8 kyu: Sum Mixed Array

# DESCRIPTION:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
# Solution:	
```javascript
const sumMix = x => x.reduce((acc, cur) => acc + Number(cur), 0);
```