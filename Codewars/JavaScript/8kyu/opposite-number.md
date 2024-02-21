# NOTES:
Very simple, given an integer or a floating-point number, find its opposite.
# Solution:	
```javascript
function opposite(number) {
    if (number > 0){
    return -Math.abs(number);
    } else if (number < 0){
    return Math.abs(number);
    } else {
    return number;  
    }
  }
  ```