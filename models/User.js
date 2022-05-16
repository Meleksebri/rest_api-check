const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    // using a validator module to validate our email
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number,
});

module.exports = mongoose.model("user", userSchema);
