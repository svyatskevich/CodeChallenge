# OOP: Verify an Object's Constructor with instanceof
Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.
# Solution:
```javascript
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House();
myHouse.numBedrooms = 4;
myHouse instanceof House;
```