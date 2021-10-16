function shelfBook(book, shelf) {
  if(shelf.length >= 3){
    return 
  
  }else if(book.genre === "sciFi"){
    shelf.unshift(book)

  }
}

function unshelfBook(book, shelf) {
  for(let i = 0; i < shelf.length; i++){
    if(book === shelf[i].title){
      shelf.splice(i, 1)
  }
}
}

function listTitles(titles) {
  var booksList = []
{
  for(let i = 0; i < titles.length; i++){
    booksList.push(titles[i].title)
  }
  return booksList.join(", ");
}
}

function searchShelf(shelf, book) {
  for(let i = 0; i < shelf.length; i++) {
    if(shelf[i].title === book){
      return true;
    }
  }
  return false;
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf 
};