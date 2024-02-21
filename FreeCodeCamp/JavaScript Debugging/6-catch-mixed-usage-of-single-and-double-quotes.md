# Debugging: Catch Mixed Usage of Single and Double Quotes
Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.
# Solution:
```javascript
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);
```