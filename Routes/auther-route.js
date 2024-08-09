const express = require("express");
const router = express.Router();

const {
  createAuther,
  getAuther,
  getAutherByID,
  updateAutherByID,
  deleteAutherByID,
} = require("../Controllers/auther-controller");

router.post("/", createAuther);
router.get("/", getAuther);
router.get("/:id", getAutherByID);
router.patch("/:id", updateAutherByID);
router.delete("/:id", deleteAutherByID);
module.exports = router;
