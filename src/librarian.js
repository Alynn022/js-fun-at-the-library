class Librarian {
  constructor(librarian, library, patron, shelf) {
    this.name = librarian;
    this.library = library;
    this.patron = patron;
    this.shelf = shelf
  }
    greetPatron(patron, greeting) {
      if(patron === 'Amy') {
        return `Good morning, ${patron}!`
    }
        return `Hello, ${patron}!`
  }
    addBook(book) {
      book.push(shelf)
    }
    findBook(book) {
    for(var i = 0; i < book.length; i++)
      if(book === shelf.title) {
      return `Yes, we have ${book}`
  } else {
      return `Sorry, we do not have ${book}`
      }
    }
  }
  //addBook(book) {



module.exports = Librarian;
