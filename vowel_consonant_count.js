/* You are given a string, s, that consists of only lowercase
English letters. If vowels have a value of 1, and consonants
are valued at 2, return the sum of the string.
Hints: split() and reduce()
string abcde should equal 8
*/
function countVowelConsonant(str) {
    // write code here
    split = (str.match(/[aeiou]/gi)).trim();
    console.log(split);
    // const vowel_count = split.match(/[aeiou]/gi).length;
    // // vowels = 1
    // vowel_total = vowel_count;
    // const consonant_count = str.length - vowel_count;
    // console.log(consonant_count);
  }

  countVowelConsonant("This is a string");