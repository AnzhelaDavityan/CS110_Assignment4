//factorial: A function that returns the factorial of a given positive number (using loop).
//factorial of 0 and 1 is 1
function factorial(num){
if(num ===0 || num ===1){
    console.log(1);
}
for(let i = num - 1; i>=1;i--){
    num = num*i;
}
console.log(num);
}
return factorial(5);
module.exports={
    factorial:factorial,
}














