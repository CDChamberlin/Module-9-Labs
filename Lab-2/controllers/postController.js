"use strict";

let Models = require("../models");

const postController = {
  getPosts: async (req, res) => {
    try {
      const posts = await Models.Post.find({});
      res.status(200).send({ result: 200, data: posts });
    } catch (err) {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    }
  },

  createPost: async (req, res) => {
    try {
      const newPost = await new Models.Post(req.body).save();
      res.status(201).send({ result: 201, data: newPost });
    } catch (err) {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    }
  },

  updatePost: async (req, res) => {
    try {
      const updatedPost = await Models.Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(204).send({ result: 204, data: updatedPost });
    } catch (err) {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    }
  },

  deletePost: async (req, res) => {
    try {
      await Models.Post.findByIdAndDelete(req.params.id);
      res.status(204).send({ result: 204, message: 'Post deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    }
  }
};

module.exports = postController;
