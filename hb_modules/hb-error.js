exports.process = function(err) {
  console.log('process.errr ************************', err.code);
  if (err && err.code)  {
    console.log
    switch(err.code) {
      case 11000:
        console.log('case 11000')
        err.msg = 'This item already exists.';
        err.status = 409;
        break;
      default:
        err.msg = 'Sorry, there was an error.'
    }
  }
  console.log('Returning HBerr: ', err);
  return err;
}