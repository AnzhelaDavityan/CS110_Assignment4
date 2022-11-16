// JtoHexadecimal: A function that converts a given decimal positive integer into its corresponding Hexadecimal value.
// Hint: You can have an array of characters from ‘A’ to ‘F’ (where index of ‘A’ is zero and index of ‘F’ is five) and get the right letter using your remainder as its index.

function decimalHex(num){
const numLetter="0123456789ABCDEF";
let rem="";
let hex="";

    while (num > 0) {
      rem+= numLetter[num%16];
      num = Math.floor(num/16);
}
for(let i=rem.length-1;i>=0;i--){
    hex=hex +rem[i];
}
console.log(hex);
}
return decimalHex(26);

module.exports={
    decimalHex:decimalHex,
}

  