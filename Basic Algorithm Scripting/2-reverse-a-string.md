# Basic Algorithm Scripting: Reverse a String
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".
# Solution:
```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");
```