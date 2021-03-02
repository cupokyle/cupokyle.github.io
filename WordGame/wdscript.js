function randomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function createNewWord(array) {
  var newWord = document.createElement("p");
  newWord.innerHTML = randomWord(array);
  return newWord;
}

function addWord(array) {
  var prepWord = createNewWord(array);
  document.getElementById("bigBox").appendChild(prepWord);
}
