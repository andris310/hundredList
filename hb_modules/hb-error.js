exports.process = function(err) {
  console.log('process.errr ************************', err.code)
  if (err && err.code)  {
    switch(err.code) {
      case 11000:
        console.log('case 11000')
        err.msg = 'This item already exists.';
        break;
      default:
        err.msg = 'Sorry, there was an error.'
    }
  }
  console.log('Returning', err);
  return err;
}