# NOTE:
Complete the solution so that it reverses the string passed into it.

# Examples:
```javascript
'world'  =>  'dlrow'
'word'   =>  'drow'
```
# Solution:
```javascript
function solution(str){
  let splitString = str.split('');
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join('');
  
  return joinArray;
}
```