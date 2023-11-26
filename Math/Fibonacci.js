const fibonacci = (num) => {
   if (num < 1) {
      return "Invalid Number";
   } else if (num === 1) {
      return [0];
   } else {
      const fib = [0, 1];
      for (let i = 2; i < num; i++) {
         fib[i] = fib[i - 1] + fib[i - 2];
      }
      return fib;
   }
};

console.log(fibonacci(0)); // Invalid Number
console.log(fibonacci(1)); // [0]
console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(4)); // [0, 1, 1, 2]