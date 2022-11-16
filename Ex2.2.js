//gcd: A function that returns the Greatest Common Divisor of two positive integers using the Euclidean algorithm.
function gcd(x,y){
while (y>0){
    let t = y;
    y = x % y;
    x = t;
}
console.log(x);
}
return gcd(8,6);

module.exports={
    gcd:gcd,
}

