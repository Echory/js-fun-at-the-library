
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
  library.shelves[book.genre].push(book)
}

function checkoutBook(library, title, genre) {
  
  for(let i = 0; i < library.shelves[genre].length; i++) {

    if(title === library.shelves[genre][i].title){
     library.shelves[genre].splice(i, 1) 
     return `You have now checked out ${title} from the ${library.name}`
    }

  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}`

}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};  