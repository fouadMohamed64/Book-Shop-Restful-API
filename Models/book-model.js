const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "book title is require"],
    },
    genre: {
      type: String,
      require: [true, "book genre is require"],
    },
    auther: {
      type: mongoose.SchemaTypes.ObjectId,
      require: [true, "book auther is require"],
    },
    publisher: {
      type: mongoose.SchemaTypes.ObjectId,
      require: [true, "book publisher is require"],
    },
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      require: [true, "book category is require"],
    },
    description: {
      type: String,
    },
    pageCount: {
      type: Number,
      require: [true, "book pageCount is require"],
    },
    languages: {
      type: String,
      enum: ["En", "Ar", "Es", "Ge"],
      default: "En",
    },
    rating: {
      type: Number,
      require: [true, "book rating is require"],
    },
    publishedDate: {
      type: String,
      require: [true, "book publish date is require"],
    },
    price: {
      type: Number,
      require: [true, "book price is require"],
    },
    // reviews:{
    //     type: mongoose.SchemaTypes.ObjectId,
    // },
  },
  { timestamps: true }
);

const bookModel = mongoose.model("Book", bookSchema);

module.exports = bookModel;
