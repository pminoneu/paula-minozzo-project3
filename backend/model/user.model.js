import mongoose from "mongoose";
import UserSchema from "../schema/user.schema.js";

const UserModel = mongoose.model("UserModel", UserSchema);
export function createNewUser(newUser) {
    return UserModel.create(newUser);
}

export function findUserByUsername(username) {
    return UserModel.findOne({ username }).exec();
}
export function getAllUsers() {
    return UserModel.find({}).exec();
}

export default UserModel;