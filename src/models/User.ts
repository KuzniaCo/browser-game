import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  login: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  registrationDate: Date,
  lastLoggedIn: Date,
});

const UserModel = mongoose.model("User", UserSchema);

export {UserModel};
