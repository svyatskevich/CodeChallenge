# Basic Algorithm Scripting: Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
# Solution:
```javascript
function booWho(bool) {
 if (bool === true || bool === false) {
   return true;
 } else {
   return false;
 }
}

booWho(null);
```