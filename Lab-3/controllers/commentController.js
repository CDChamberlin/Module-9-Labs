"use strict";

let Models = require("../models");

const commentController = {
  getComments: async (req, res) => {
    try {
      const comments = await Models.Comment.find({});
      res.status(200).send({ result: 200, data: comments });
    } catch (err) {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    }
  },

  createComment: async (req, res) => {
    try {
      const newComment = await new Models.Comment(req.body).save();
      res.status(201).send({ result: 201, data: newComment });
    } catch (err) {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    }
  },

  updateComment: async (req, res) => {
    try {
      const updatedComment = await Models.Comment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(204).send({ result: 204, data: updatedComment });
    } catch (err) {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    }
  },

  deleteComment: async (req, res) => {
    try {
      await Models.Comment.findByIdAndDelete(req.params.id);
      res
        .status(204)
        .send({ result: 204, message: "Comment deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    }
  },
};

module.exports = commentController;
