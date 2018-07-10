const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
  email: { 
    type: String, match: [/.+@.+\..+/, "Not a valid email"]
  },
  username: {
    type: String, unique: true, required: true, trim: true
    },
  password: {
     type: String, required: true 
    },
  passwordConf: { 
    type: String, required: true 
  },
  name: { 
    type: String 
  },
  organization: { 
    type: String
  },
  isAdmin: {
    type: Boolean, default: false
  },
  isOwner: {
    type: Boolean, default: false
  },


});

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
var User = mongoose.model('User', UserSchema);
module.exports = User;

UserSchema.statics.authenticate = function (email, password, callback) {

  User.findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}

UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

var User = mongoose.model('User', UserSchema);

module.exports = User;