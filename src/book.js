function createTitle(bookIdea) {
  return "The " + bookIdea;
};

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  };
};

function saveReview(review, reviews) {
  for (var i = 0; i < reviews.length; i++) {
    if (review === reviews[i]) {
    return
    }
  }
  reviews.push(review);
};

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
};

function writeBook(bookTitle, bookCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
};

function editBook(book) {
  book.pageCount = book.pageCount * .75
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
