const express = require("express");

const router = express.Router();

const {
  createCategory,
  getCategories,
  getCategoriesByID,
  updateCategoryByID,
  deleteCategoryByID,
} = require("../Controllers/category-controller");

router.post("/", createCategory);
router.get("/", getCategories);
router.get("/:id", getCategoriesByID);
router.patch("/:id", updateCategoryByID);
router.delete("/:id", deleteCategoryByID);

module.exports = router;
