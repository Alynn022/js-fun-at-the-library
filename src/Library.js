function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
};

function addBook(library, book) {
  if(book.genre === "fantasy") {
    library.shelves.fantasy.unshift(book);
  } if(book.genre === "nonFiction") {
    library.shelves.nonFiction.unshift(book);
  } if(book.genre === "fiction") {
    library.shelves.fiction.unshift(book);
  }
    return
};

//
//  if genre is fiction
//      access fiction shelf (array)
//        loop through array
//          if books title matches given title
//            remove book from array
//            and return appropriate string
//  if genre is nonFiction
//    access nonfiction shelf (array)
//      loop through array
//        if book title matches given title
//        remove book from array
//          and return appropriate string
function checkoutBook(library, title, genre) {
  if(genre === "fiction") {
    var fictionShelf = library.shelves.fiction
    for(var i = 0; i < fictionShelf.length; i++) {
      if(title === fictionShelf[i].title) {
        library.shelves.fiction.splice(i, 1);
        return (`You have now checked out ${title} from the ${library.name}`);
      }
    }
  } else if(genre === "nonFiction") {
    var nonFictionShelf = library.shelves.nonFiction
      if(nonFictionShelf.length === 0) {
        return (`Sorry, there are currently no copies of ${title} available at the ${library.name}`)
    }
    for(var i = 0; i < nonFictionShelf.length; i++) {
      if(title === nonFictionShelf[i].title) {
        library.shelves.nonFiction.splice(i, 1);
        return (`You have now checked out ${title} from the ${library.name}`);
    }
      }
    } else {
          return (`Sorry, there are currently no copies of ${title} available at the ${library.name}`)
        }
      };



module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
};
