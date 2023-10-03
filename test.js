let sentence =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

function findLongestWords(sentence) {
  const regex = /[a-zA-Z\s]/g;

  const words = sentence.match(regex).join("").split(" ");

  let longestWords = [];
  let maxLength = 0;

  for (const word of words) {
    const wordLength = word.length;

    if (wordLength === maxLength) {
      longestWords.push(word);
    } else if (wordLength > maxLength) {
      maxLength = wordLength;
      longestWords = [word];
    }
  }

  if (longestWords.length === 1) {
    return longestWords[0];
  } else {
    let vowelCount = 0;
    let maxVowelCount = 0;
    let vowelLongestWord;
    for (let i = 0; i < longestWords.length; i++) {
      for (const char of longestWords[i]) {
        if ("aeiouAEIOU".includes(char)) {
          vowelCount++;
        }
      }

      if (vowelCount > maxVowelCount) {
        maxVowelCount = vowelCount;
        vowelLongestWord = longestWords[i];
      }
    }
    console.log(vowelLongestWord,"maxVowelCount");
    return maxVowelCount;
  }
}
findLongestWords(sentence);
