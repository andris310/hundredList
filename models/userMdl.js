var bcrypt   = require('bcrypt-nodejs');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  local: {
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    }
  },
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String
  }
});

// generating a hash
User.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);