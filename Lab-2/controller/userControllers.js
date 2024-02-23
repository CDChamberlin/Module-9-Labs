"use strict";

let Models = require("../models");

const getUsers = (res) => {
  // Finds all users
  Models.User.find({})
    .then((data = res.status(200).send({ result: 200, data: data })))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const createUser = (data, res) => {
  // Creates a new user using JSON data POSTed in req.body
  console.log(`createUser: ${data}`);
  new Models.User(data)
    .save()
    .then((data) => res.send({ result: 201, data: data }))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const updateUser = (req, res) => {
  // updates the user matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const deleteUser = (req, res) => {
  // deletes the user matching the ID from the param
  Models.User.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};
