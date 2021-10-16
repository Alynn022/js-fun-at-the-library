function shelfBook(book, shelf) {
  if((book.genre === "sciFi") && (shelf.length < 3)) {
    shelf.unshift(book)
  }
  return
};


function unshelfBook(title, shelf) {
  for(var i = 0; i < shelf.length; i++) {
    var book = shelf[i];
    if(book.title === title) {
      shelf.splice(i, 1)
    }
  }
};

function listTitles(otherShelf) {
  // loop through the array
  // access title
  // create a new string
  // add title to new string
  var titles = "";

  for(var i = 0; i < otherShelf.length; i++) {
    var book = otherShelf[i];
    titles += book.title; //+= is the same as titles = titles + book.titles
    if(i != otherShelf.length - 1) { //if the current iteration does not equal the end of the array,
      titles += ", "
    }
    console.log(titles)
  }
    return titles

  // var str = otherShelf.join();// "{...},{...},{...}"
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};
