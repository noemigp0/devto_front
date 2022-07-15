const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 3,
    required: true,
  },
  content: {
    type: String,
    minlength: 3,
  },
  tags: {
    type: String,
    minlength: 3,
  },
  urlCoverImage: {
    type: String,
    minlength: 3,
  },
  author: {
    type: String,
    minlength: 3,
    required: true,
  },
  createdDate: {
    type: Date,
  },
  mintoread: {
    type: Number,
  },
  reactions: {
    type: Number,
  },
  comments: {
    type: String,
  },
  category: {
    type: String,
    minlength: 3,
  },
  avatar: {
    type: String,
    minlength: 3,
  },
});

module.exports = mongoose.model("posts", postSchema);
