let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = function() {
  const availableBooks = BookInstance.find({status:"Available"}).populate('book');

  return availableBooks;
}