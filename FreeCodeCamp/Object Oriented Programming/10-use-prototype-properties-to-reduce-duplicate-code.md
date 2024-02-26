# OOP: Use Prototype Properties to Reduce Duplicate Code
Add a numLegs property to the prototype of Dog
# Solution:
```javascript
function Dog(name) {
  this.name = name;
}

// Only change code above this line
let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4;
```