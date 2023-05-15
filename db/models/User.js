import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  gender: String,
  email: String,
  age: Number,
  address: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
