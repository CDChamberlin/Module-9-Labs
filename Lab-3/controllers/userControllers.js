"use strict";

let Models = require("../models");

const userController = {
  getUsers: async (req, res) => {
    try {
      const users = await Models.User.find({});
      res.status(200).send({ result: 200, data: users });
    } catch (err) {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    }
  },

  createUser: async (req, res) => {
    try {
      const newUser = await new Models.User(req.body).save();
      res.status(201).send({ result: 201, data: newUser });
    } catch (err) {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const updatedUser = await Models.User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(204).send({ result: 204, data: updatedUser });
    } catch (err) {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      await Models.User.findByIdAndDelete(req.params.id);
      res.status(204).send({ result: 204, message: 'User deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    }
  }
};

module.exports = userController;
