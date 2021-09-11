//solution 1 -  3 loop || O(n cube)
const longestPalindrome = (s) => {
  if (isPalindrome(s)) return s;
  //divide string into many substring with length from length - 1 to 0;
  //ex: abcde => [abcd, bcde]; [abc, bcd, cde];...
  for (let len = s.length; len > 0; --len) {
    for (let i = 0; i + len <= s.length; i++) {
      if (isPalindrome(s.substring(i, i + len))) return s.substring(i, i + len);
    }
  }
};

const isPalindrome = (string) => {
  const len = string.length;
  for (let i = 0; i < len; i++) {
    if (string.charAt(i) !== string.charAt(len - 1 - i)) return false;
  }
  return true;
};

//solution 2
const longestPalindrome2 = (s) => {
  let maxPalindrome = "";
  //expand from a character and check palindrome length
  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = expandPalindrome(s, i, i);
    let evenPalindrome = expandPalindrome(s, i, i + 1);
    if (maxPalindrome.length < oddPalindrome.length) {
        maxPalindrome = oddPalindrome
    }
    if(maxPalindrome.length < evenPalindrome.length) {
        maxPalindrome = evenPalindrome
    }
  }
  return maxPalindrome
};

const expandPalindrome = (string, left, right) => {
    //check left and right from i is equal. 
    //ex: cabade. check from b left char equals to right char continue till not equal
    while (left >= 0 && r < string.length && string.charAt(left) === string.charAt(right)) {
    left--;
    right++;
  }
  return sstring.substring(left + 1, right);
};

