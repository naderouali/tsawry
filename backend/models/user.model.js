const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: { type: String, required: true, trim: true, minlength: 3 },
    lastname: { type: String, required: true, trim: true, minlength: 3 },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      minlength: 1,
    },
    birthday: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
