amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: process.env.AWS_ID,
  awsSecret: process.env.AWS_KEY,
  awsTag: process.env.AWS_TAG
});

exports.searchAmBooks = searchAmBooks;

function searchAmBooks(searchParam, callback) {
  console.log('inside searchAmBooks, SEARCHING FOR : ', searchParam);

  client.itemSearch({
    keywords: searchParam,
    searchIndex: 'Books',
    responseGroup: 'ItemAttributes,Images'
  }, function(err, results) {
    if (err) {
      return callback(err);
    }

    var books = processAmBooks(results);
    callback(null, books);
  });
}

function processAmBooks(books) {
  var processed = [];
  for(var i = 0; i < books.length; i++) {
    var processedBook = {};
    var book = removeArray(books[i]);

    processedBook.title = book.ItemAttributes.Title;
    processedBook.author = book.ItemAttributes.Author;
    processedBook.smallImage = book.SmallImage.URL;
    processedBook.largeImage = book.LargeImage.URL;
    processedBook.detailPageUrl = book.DetailPageURL;

    processedBook.isbn = book.ItemAttributes.ISBN || book.ItemAttributes.EISBN

    processed.push(processedBook);
  }

  return processed;
}

function removeArray(item) {
  if (typeof item !== 'object') {
    return;
  }

  for (var key in item) {
    if (item.hasOwnProperty(key)) {
      if (Array.isArray(item[key])) {
        item[key] = item[key][0];
        removeArray(item[key]);
      }
    }
  }

  return item;
}