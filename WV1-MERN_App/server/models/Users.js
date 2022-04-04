// const text = require("body-parser/lib/types/text");
// const { type } = require("express/lib/response");
const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
//   username: {
//     type: String,
//     required: true,
//   },
// });
// const UserModel = mongoose.model("users", UserSchema);

// module.exports = UserModel;

// const UserSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
//   username: {
//     type: String,
//     required: true,
//   },
// });

// const UserModel = mongoose.model("users", UserSchema);

// module.exports = UserModel;

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
