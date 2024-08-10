const categoryModel = require("../Models/category-model");

exports.createCategory = async (req, res) => {
  try {
    let newCategory = await categoryModel.create(req.body);
    res.status(201).json({ message: "done", data: newCategory });
  } catch (err) {
    res.status(400).json({ message: "fail to create category" });
  }
};

exports.getCategories = async (req, res) => {
  try {
    let categories = await categoryModel.find();
    res.status(200).json({ message: "done", data: categories });
  } catch (err) {
    res.status(400).json({ message: "fail to get categories" });
  }
};

exports.getCategoriesByID = async (req, res) => {
  let { id } = req.params;
  try {
    let targetCategory = await categoryModel.findById(id);
    res.status(200).json({ message: "done", data: targetCategory });
  } catch (err) {
    res.status(400).json({ message: "fail to get categeory by id" });
  }
};

exports.updateCategoryByID = async (req, res) => {
  let { id } = req.params;
  try {
    let updatedCategory = await categoryModel.findByIdAndUpdate(id, req.body);
    res.status(201).json({ message: "done", data: updatedCategory });
  } catch (err) {
    res.status(400).json({ message: "fail to update category" });
  }
};

exports.deleteCategoryByID = async (req, res) => {
  let { id } = req.params;
  try {
    await categoryModel.findByIdAndDelete(id);
    res.status(204).json();
  } catch (err) {
    res.status(400).json({ message: "fail to delete this" });
  }
};
