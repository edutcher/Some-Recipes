const mongoose = require("mongoose");
const Recipe = require("./Recipe");

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "tag required",
  },
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
