import mongoose from "mongoose";
import UserSchema from "../schema/user.schema.js";

const GameModel = mongoose.model("GameModel", GameSchema);

export function createNewGame(newGame) {
    return GameModel.create(newGame);
}

export function getGamesByUserId(userId) {
    return GameModel.find({ userId }).exec();
}   
export default GameModel;