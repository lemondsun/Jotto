export function getLetterMatchCount(guessedWord, secertWord) {
  const secertLetterSet = new Set(secertWord.split(""));
  const guessedLetterSet = new Set(guessedWord.split(""));
  return [...secertLetterSet].filter(letter => guessedLetterSet.has(letter))
    .length;
}
