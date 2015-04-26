// var util = require('util'),
//     OperationHelper = require('apac').OperationHelper;

// var opHelper = new OperationHelper({
//     awsId:     process.env.AWS_ID,
//     awsSecret: process.env.AWS_KEY,
//     assocId:   process.env.AWS_TAG,
//     // xml2jsOptions: an extra, optional, parameter for if you want to pass additional options for the xml2js module. (see https://github.com/Leonidas-from-XIV/node-xml2js#options)
//     version:   '2013-08-01'
//     // your version of using product advertising api, default: 2013-08-01
// });

amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: process.env.AWS_ID,
  awsSecret: process.env.AWS_KEY,
  awsTag: process.env.AWS_TAG
});

exports.searchAmBooks = searchAmBooks;

function searchAmBooks(searchParam, callback) {
  console.log('inside searchAmBooks, SEARCHING FOR : ', searchParam);
  // opHelper.execute('ItemSearch', {
  //   'SearchIndex': 'Books',
  //   'Keywords': searchParam,
  //   'ResponseGroup': 'ItemAttributes,Offers'
  // }, function(err, results) { // you can add a third parameter for the raw xml response, "results" here are currently parsed using xml2js
  //   if (err) {
  //     console.log('ERRor inside ctl')
  //     console.log(err);
  //     return callback(err);
  //   }
  //   console.log('success............')
  //   console.log(results);
  //   callback(null, results);
  // });
  client.itemSearch({
    keywords: searchParam,
    searchIndex: 'Books',
    responseGroup: 'ItemAttributes,Images'
  }, function(err, results) {
    if (err) {
      console.log('ERRor inside ctl')
      console.log(err);
      return callback(err);
    }
    console.log('success............')
    console.log(results);
    callback(null, results);
  });
}