import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document{
    login: string,
    email: string,
    password: string,
    registrationDate: Date,
    lastLoggedIn: Date
}

const UserSchema = new mongoose.Schema({
  login: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  registrationDate: Date,
  lastLoggedIn: Date,
});

export const User = mongoose.model<IUser>("User", UserSchema);