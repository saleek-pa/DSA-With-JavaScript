function reverseInteger(num) {
   const minInt = -Math.pow(2, 31);
   const maxInt = Math.pow(2, 31) - 1;
   const reversed = parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
   return minInt < reversed && maxInt > reversed ? reversed : 0;
}

console.log(reverseInteger(123)); // 321
console.log(reverseInteger(-123)); // -321
console.log(reverseInteger(120)); // 21
