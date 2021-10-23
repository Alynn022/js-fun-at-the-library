class Librarian {
  constructor(librarian, library, patron) {
    this.name = librarian;
    this.library = library;
    this.patron = patron;
  }
    greetPatron(patron, greeting) {
      if(patron === 'Amy') {
        return `Good morning, ${patron}!`
      } else {
        return `Hello, ${patron}!`
      }
  }
    findBook(title) {
      for(var i = 0; i < this.library.shelves.fantasy.length; i++) {
       if(title === this.library.shelves.fantasy[i].title) { //this.library.shelves.fantasy is accessing the array, we need to access the object, so that goes after the [i]
         this.library.shelves.fantasy.splice(title)
        return `Yes, we have ${title}`
    } else {
        return `Sorry, we do not have ${title}`
      }
    }
  }
    calculateLateFee(daysLate) {
    return Math.ceil(daysLate *= .25)
    }
}




module.exports = Librarian;
