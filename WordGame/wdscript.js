// Creating a Timer
let timer = 0;

//Limit it to words with 8 or less and more than 2 letters.
function randomWord(array) {
  let genWord = array[Math.floor(Math.random() * array.length)];
  while (genWord.length > 8 || genWord.length <= 2) {
    genWord = array[Math.floor(Math.random() * array.length)];
  }
  timer += Math.ceil(0.3 * genWord.length);
  return genWord;
}

function createNewWord(array) {
  var newWord = document.createElement("p");
  newWord.innerHTML = randomWord(array);
  return newWord;
}
// Limiting the words to 10.
let limit = 10;
function addWord(array) {
  if (limit > 0) {
    var prepWord = createNewWord(array);
    document.getElementById("bigBox").appendChild(prepWord);
    limit -= 1;
    console.log(timer);
  } else {
    console.log("Word limit reached");
    document.getElementById("gameButton").innerHTML = "Start Game";
  }
}
