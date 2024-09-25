import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/User.route.js";
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
app.use("/api/user", router); // this help us to just route out paths accordingly
// thus we request this from client side to this by http://localhost:2000/api/user/test athen we got this route paths
app.listen(2000, () => {
  console.log("the server is running in the port of 2000");
});
