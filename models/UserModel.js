const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  avatar: {
    type: String
  },
  country: {
    type: String
  },
  registerDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("users", UserSchema);
