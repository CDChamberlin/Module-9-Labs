"use strict";

let Models = require("../models");

const getPosts = (res) => {
  Models.Post.find({})
    .then(
      (data = res.status(200).send({
        result: 200,
        data: data,
      }))
    )
    .catch((err) => {
      console.log(`Get posts error: ${err}`);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const createPost = (data, res) => {
  console.log(`createPost: ${data}`);
  new Models.Post(data)
    .save()
    .then((data) => res.status(201).send({ result: 201, data: data }))
    .catch((err) => {
      console.log(`Error in createPost. Error message: ${err}`);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const updatePost = (req, res) => {
  console.log(`Update Post: ${req.body}`);
  Models.Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.status(201).send({ result: 201, data: data }))
    .catch((err) => {
      console.log(`Error in updating post ${req.params.id}: ${err}`);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const deletePost = (req, res) => {
  Models.Post.findByIdAndDelete(req.params.id)
    .then((data) => res.status(204).send({ result: 204, data: data }))
    .catch((err) => {
      console.log(
        `Error in deleting post ${req.params.id}. /n Error message: ${err}`
      );
      res.status(500).send({ result: 500, error: err.message });
    });
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
