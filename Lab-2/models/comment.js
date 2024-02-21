const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  postID: [],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  userID: [],
  comment: { type: String, required: true },
});

module.exports = mongoose.model("comment", commentSchema);
