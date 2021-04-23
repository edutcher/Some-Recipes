const mongoose = require("mongoose");
const Recipe = require("./Recipe");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "User Name required",
  },
  password: {
    type: String,
    trim: true,
    required: "Password required",
  },
  recipes: {
    type: Schema.Types.ObjectID,
    ref: "Recipe",
  },
});

userSchema.statics.checkPassword = async function (name, password) {
  const thisUser = await this.findOne({ name });
  const isValid = await bcrypt.compare(password, thisUser.password);
  return isValid ? thisUser : false;
};

userSchema.pre("save", function (next) {
  this.password = bcrypt.hash();
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
