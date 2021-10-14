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
  reviews.push(review);
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
