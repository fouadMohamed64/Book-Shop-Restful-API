const autherModel = require("../Models/auther-model");

exports.createAuther = async (req, res) => {
  try {
    let newAuther = await autherModel.create(req.body);
    res.status(201).json({ message: "done", data: newAuther });
  } catch (err) {
    res.status(400).json({ message: "fail to create this auther" });
  }
};

exports.getAuther = async (req, res) => {
  try {
    let authers = await autherModel.find();
    res.status(200).json({ message: "done", date: authers });
  } catch (err) {
    res.status(400).json({ message: "fail to get authers" });
  }
};

exports.getAutherByID = async (req, res) => {
  let { id } = req.params;
  try {
    let auther = await autherModel.findOne({ _id: id });
    res.status(200).json({ message: "done", data: auther });
  } catch (err) {
    res.status(400).json({ message: "fail" });
  }
};

exports.updateAutherByID = async (req, res) => {
  let { id } = req.params;
  try {
    let targetAuther = await autherModel.findByIdAndUpdate(id, req.body);
    res.status(201).json({ message: "done", data: targetAuther });
  } catch (err) {
    res.status(404).json({ message: "not found" });
  }
};

exports.deleteAutherByID = async (req, res) => {
  let { id } = req.params;
  try {
    await autherModel.findByIdAndDelete(id);
    res.status(204).json();
  } catch (err) {
    res.status(400).json({ message: "fail to delete" });
  }
};
