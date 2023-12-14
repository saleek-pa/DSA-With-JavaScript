var isPalindrome = function (num) {
   const reversedNum = num.toString().split("").reverse().join("");
   return num.toString() === reversedNum;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
