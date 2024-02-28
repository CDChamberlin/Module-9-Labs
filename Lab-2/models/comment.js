const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  postID: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: { type: String, required: true },
});

module.exports = mongoose.model("comment", commentSchema);
