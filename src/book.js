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

function calculatePageCount() {

}
  

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}