# Basic JavaScript: Generate Random Whole Numbers within a Range
Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin and less than or equal to myMax.
# Solution:
```javascript
function randomRange(myMin, myMax) {
  let random = Math.random() * (myMax - myMin + 1) +  myMin;
  let randomRange = Math.floor(random);
 
  if (randomRange >= myMin && randomRange <= myMax){
    return randomRange;
  }
}
```
