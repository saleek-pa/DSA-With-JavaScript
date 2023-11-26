function factorial(num) {
   if (num < 0) {
      return "Invalid Input";
   }
   let result = 1;
   for (let i = 2; i <= num; i++) {
      result = result * i;
   }
   return result;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120
