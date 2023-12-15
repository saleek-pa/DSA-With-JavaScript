var lengthOfLastWord = function (text) {
   return text.trim().split(" ").slice(-1)[0].length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
