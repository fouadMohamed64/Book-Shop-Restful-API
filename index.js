const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

const autherRouter = require("./Routes/auther-route");
const categoryRouter = require("./Routes/category-route");
const userRouter = require("./Routes/user-route");

mongoose
  .connect("mongodb://127.0.0.1:27017/BookShopRestfulApi")
  .then(() => console.log("Connecting To DB Sucssfuly"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/auther", autherRouter);
app.use("/category", categoryRouter);
app.use("/user", userRouter);

const PORT = 9000;
app.listen(PORT, () =>
  console.log(`Severe Start Connecting Sucssfuly On Port ${PORT}`)
);
