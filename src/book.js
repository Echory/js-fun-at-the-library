function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
return {name, age, pronouns};
}

function saveReview(review, arr) {
  if(!arr.includes(review)){
  arr.push(review);
}
}

function calculatePageCount(bookTitle) {
  var counter = 0;
  for(let i = 0; i < bookTitle.length; i++) {
  counter = counter + 20;
  }
  return counter;
}

function writeBook(title, mainCharacter, genre) {
  return {title, mainCharacter, pageCount: calculatePageCount(title), genre}
}
  
function editBook(book) {
  var quarter = book.pageCount / 4
  book.pageCount = book.pageCount - quarter;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}