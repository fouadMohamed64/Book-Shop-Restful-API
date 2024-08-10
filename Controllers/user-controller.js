const userModel = require("../Models/user-model");

exports.createUser = async (req, res) => {
  try {
    let newUser = await userModel.create(req.body);
    res.status(201).json({ message: "done", data: newUser });
  } catch (err) {
    res.status(400).json({ message: "fail to create user" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    let users = await userModel.find();
    res.status(200).json({ message: "done", data: users });
  } catch (err) {
    res.status(400).json({ message: "fail to get users" });
  }
};

exports.getUserByID = async (req, res) => {
  let { id } = req.params;
  try {
    let targetUser = await userModel.findById(id);
    res.status(200).json({ message: "done", data: targetUser });
  } catch (err) {
    res.status(404).json({ message: "not found" });
  }
};

exports.updateUserByID = async (req, res) => {
  let { id } = req.params;
  try {
    await userModel.findByIdAndUpdate(id, req.body);
    res.status(201).json({ message: "done", data: req.body });
  } catch (err) {
    res.status(404).json({ message: "not found" });
  }
};

exports.deleteUserByID = async (req, res) => {
  let { id } = req.params;
  try {
    await userModel.findByIdAndDelete(id);
    res.status(204).json();
  } catch (err) {
    res.status(404).jsno({ message: "not found" });
  }
};
