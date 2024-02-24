const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  profilePicURL: { type: String },
  createdAt: { type: Date, default: Date.now },
  password: { type: String, trim: true },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", userSchema);
