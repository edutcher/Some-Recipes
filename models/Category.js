const mongoose = require("mongoose");
const Recipe = require("./Recipe");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Category required",
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
