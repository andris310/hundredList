exports.process = function(err) {
  if (err && err.code)  {
    switch(err.code) {
      case 11000:
        err.msg = 'This item already exists.';
        err.status = 409;
        break;
      default:
        err.msg = 'Sorry, there was an error.'
    }
  }
  return err;
}