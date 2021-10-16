
function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library;
}

function addBook(library, book) {
  if(book.genre === 'fantasy'){
    library.shelves.fantasy.push(book)
  }
}

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};