# Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement
We've defined a function countOnline which accepts one argument, allUsers. Use a for...in statement inside this function to loop through the allUsers object and return the number of users whose online property is set to true. An example of an object which could be passed to countOnline is shown below. Each user will have an online property set to either true or false.
# Solution:
```javascript
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  
let result = 0;
 for (let user in allUsers ) {
  if (allUsers[user].online === true) {
   result++;
  }
 }
 return result;
}



console.log(countOnline(users));
```