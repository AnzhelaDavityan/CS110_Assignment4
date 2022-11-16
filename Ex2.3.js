//lcm: A function that returns the Least Common Multiple of two positive integers. This function should call your function in question 2.3.
//lcm is equal the product of two numbers devided to their gcd

const gcd = require('./Ex2.2');
const num=gcd;

function lcm(num1,num2,num){
    let result= num1*num2/num;
    console.log(result);

}
return lcm(8,6, 2);
module.exports={
    lcm:lcm,
}



