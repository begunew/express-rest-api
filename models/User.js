let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String },
  firstName: { type: String },
});

const User = mongoose.model("myUser", userSchema);
module.exports = User;
