function prime(num) {
   if (num < 2) {
      return false;
   }
   for (let i = 2; i < num; i++) {
      if (num % i === 0) {
         return false;
      }
   }
   return true;
}

console.log(prime(1)); //false
console.log(prime(5)); //true
console.log(prime(8)); //false
