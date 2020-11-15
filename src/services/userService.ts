import { User, IUser } from "../models/User";
import * as mongoose from "mongoose";

export class userService {
  public static addUser = async (data: IUser): Promise<IUser> => {
    const newUser = new User({
      registrationDate: new Date(),
      ...data,
    });
    return new Promise(async (resolve, reject) => {
      newUser
        .save()
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  };

  public static readUser = async (
    userID: mongoose.Types.ObjectId
  ): Promise<Array<IUser>> => {
    return new Promise(async (resolve, reject) => {
      User.find({ _id: userID })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  };

  public static updateUser = async (
    data: IUser,
    userID: mongoose.Types.ObjectId
  ): Promise<IUser> => {
    return new Promise(async (resolve, reject) => {
      User.findOneAndUpdate({ _id: userID }, { $set: data }, { new: true })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  };

  public static deleteUser = async (
    userID: mongoose.Types.ObjectId
  ): Promise<string> => {
    return new Promise(async (resolve, reject) => {
      User.findOneAndDelete({ _id: userID })
        .then((res) => resolve(`Removed user with ID ${userID}`))
        .catch((err) =>
          reject(
            `En ERROR has occurred while trying to delete a user with ID ${userID}`
          )
        );
    });
  };
}
