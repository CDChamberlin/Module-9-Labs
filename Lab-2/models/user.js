const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  profilePic: { type: Blob },
  createdAt: { type: Date, default: Date.now },
  password: { type: String, trim: true },
  updatedAt: { type: Date, default: Date.now },
  alias: { type: String, trim: true },
});

module.exports = mongoose.model("user", userSchema);
