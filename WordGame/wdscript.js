// function randomWord(array) {
//   let genWord = array[Math.floor(Math.random() * array.length)];
//   if (genWord.length < 8 && genWord.length > 2) {
//     return genWord;
//   } else {
//     randomWord(array);
//   }
// }
//Limit it to words with 8 or less and more than 2 letters.
function randomWord(array) {
  let genWord = array[Math.floor(Math.random() * array.length)];
  while (genWord.length > 8 || genWord.length <= 2) {
    genWord = array[Math.floor(Math.random() * array.length)];
  }
  return genWord;
}

function createNewWord(array) {
  var newWord = document.createElement("p");
  newWord.innerHTML = randomWord(array);
  return newWord;
}

let limit = 10;
function addWord(array) {
  if (limit > 0) {
    var prepWord = createNewWord(array);
    document.getElementById("bigBox").appendChild(prepWord);
    limit -= 1;
  } else {
    console.log("No words remain");
  }
}
