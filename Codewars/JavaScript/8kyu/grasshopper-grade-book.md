
# NOTES:
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.


Numerical Score	Letter Grade
  90 <= score <= 100  'A'
  80 <= score < 90	  'B'
  70 <= score < 80	  'C'
  60 <= score < 70	  'D'
  0 <=  score < 60	  'F'

# Solution:	
```javascript
function getGrade (s1, s2, s3) {
  let numAverage = (s1 + s2 + s3) / 3; 
  if (numAverage >= 90 && numAverage <= 100) {
    return 'A';
  } else if (numAverage >= 80 && numAverage < 90) {
    return 'B';
  } else if (numAverage >= 70 && numAverage < 80) {
    return 'C';
  } else if (numAverage >= 60 && numAverage < 70) {
    return 'D';
  } else if (numAverage >= 0 && numAverage < 60) {
    return 'F';
  }
}
```