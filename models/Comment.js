const mongoose = require("mongoose");
const User = require("./User");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: {
    type: String,
    trim: true,
    required: "Comment required",
  },
  user: {
    type: Schema.Types.ObjectID,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
