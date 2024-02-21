const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, trim:true, required: true},
    description: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    imageURL: {type: String, required: true},
    userID: []
})

module.exports = mongoose.model("post", postSchema)