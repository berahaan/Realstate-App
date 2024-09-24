import mongoose from "mongoose";
// here below is intended to create a schema for a user and help us to signin
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// this below one is for creating a user model or collections ok man of God !!
const User = new mongoose.model("User", userSchema);
export default User;
