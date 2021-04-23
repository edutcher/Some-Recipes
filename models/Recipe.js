const mongoose = require("mongoose");
const User = require("./User");
const Comment = require("./Comment");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name required",
  },
  description: {
    type: String,
    trim: true,
    required: "Description required",
  },
  preptime: {
    type: Number,
  },
  cooktime: {
    type: Number,
  },
  ingredients: {
    type: [String],
  },
  directions: {
    type: [String],
  },
  category: {
    type: Schema.Types.ObjectID,
    ref: "Category",
  },
  tags: [
    {
      type: Schema.Types.ObjectID,
      ref: "Tag",
    },
  ],
  user: {
    type: Schema.Types.ObjectID,
    ref: "User",
  },
  comments: [
    {
      type: Schema.Types.ObjectID,
      ref: "Comment",
    },
  ],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
