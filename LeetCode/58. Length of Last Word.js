var lengthOfLastWord = function (text) {
   return text.trim().split(" ").slice(-1)[0].length;
};

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
