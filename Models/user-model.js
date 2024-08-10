const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      require: [true, "first name is require"],
      unique: [true, "first name must be unique"],
    },
    lastName: {
      type: String,
      require: [true, "last name is require"],
    },
    email: {
      type: String,
      require: [true, "email is require"],
    },
    password: {
      type: String,
      require: [true, "password is require"],
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      default: "male",
    },
    phoneNumber: {
      type: Number,
      require: [true, "pnoneNumber is require"],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
