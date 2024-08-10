const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "category name is required"],
  },
  description: {
    type: String,
    require: [true, "category description is required"],
  },
});

const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;
