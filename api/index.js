import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb is successfully connected be happy man ");
  })
  .catch((e) => {
    console.log(e);
  });
const app = express();
app.listen(2000, () => {
  console.log("the server is running in the port of 2000");
});
