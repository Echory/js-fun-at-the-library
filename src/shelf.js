function shelfBook(book, shelf) {
  if(shelf.length >= 3){
    return 
  
  }else if(book.genre === "sciFi"){
    shelf.unshift(book)

  }
}



module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};