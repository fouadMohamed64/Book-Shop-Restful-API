const mongoose = require("mongoose");

const autherSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Auther name is required"],
    unique: [true, "Auther name is unique"],
    minLength: [3, "Auther name is minLength 3 char"],
  },
  biography: {
    type: String,
    require: [true, "Auther biography is required"],
  },
  dateOfBirth: {
    type: String,
  },
  nationality: {
    type: String,
    required: [true, "Auther nationality is required"],
  },
});

const autherModel = mongoose.model("Auther", autherSchema);
module.exports = autherModel;
