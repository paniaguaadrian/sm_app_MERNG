const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: Strting,
  pasasword: String,
  email: String,
  createdAt: String,
});

module.exports = model("User", userSchema);
