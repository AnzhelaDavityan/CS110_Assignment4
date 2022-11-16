//Ex1
//To create a  pattern we need 3 loops, 1 of which is external and 2 are internal.
// The external loop will execute internal loops for 'n' number of times 
//The internal loop will design a pattern for each row.
//Create 2 internal loops, 1st print n - i spaces and 2nd print i stars, where i is the number of times the external loop is executed.
let pattern = "";
function myPattern(n){
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    pattern += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    pattern += "+";
  }
  pattern += "\n";
}
console.log(pattern);
}
return myPattern(5);
module.exports={
    myPattern:myPattern,
}
























